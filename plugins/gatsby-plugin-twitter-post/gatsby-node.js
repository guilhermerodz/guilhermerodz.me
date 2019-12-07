const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const Twitter = require('twitter');

const checkFileExists = promisify(fs.exists);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const renameFile = promisify(fs.rename);

const fileName = 'twitter-bot-data';
const fileExtension = '.json';
const fullFileName = fileName + fileExtension;

const delayPerPost = 1000 * 2;

exports.createPages = async ({ reporter, graphql }, pluginOptions) => {
  const { environment = 'development', onlyProduction = true } = pluginOptions;

  if (environment !== 'production' && onlyProduction) {
    reporter.info(
      `'gatsby-plugin-twitter-post' is only used at PRODUCTION environment`
    );
    return;
  }

  try {
    const { staticFolderPath } = pluginOptions;

    const filePath = path.resolve(staticFolderPath, fullFileName);

    const fileExists = await checkFileExists(filePath);

    let data = {
      startedAt: new Date(),
      tweets: [],
    };

    const hasTweeted = slug => data.tweets.find(tweet => tweet.slug === slug);

    const saveFile = () => writeFile(filePath, JSON.stringify(data));

    try {
      if (fileExists) data = JSON.parse(await readFile(filePath));
    } catch (err) {
      const fileDirname = path.basename(filePath);

      let backupIndex = 1;
      const getBackupPath = () =>
        path.join(
          fileDirname,
          `${fileName}-${backupIndex}${fileExtension}.backup`
        );

      // eslint-disable-next-line no-await-in-loop
      while (await checkFileExists(getBackupPath())) {
        backupIndex += 1;
      }

      const backupPath = getBackupPath();

      await renameFile(filePath, backupPath);

      reporter.warn(`Can't read "${filePath}". Creating a new file.`);
      reporter.info(`Renamed old file to "${backupPath}".`);
    }

    // ----------------------------------

    const { sortFrontmatter } = pluginOptions;

    const query = `
    {
      ${
        sortFrontmatter
          ? `allMarkdownRemark(sort: { fields: [frontmatter___${sortFrontmatter.field}], order: ${sortFrontmatter.order} }) {`
          : `!sortFrontmatter && allMarkdownRemark {`
      }
        edges {
          post: node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
    `;

    const {
      data: {
        allMarkdownRemark: { edges: posts },
      },
    } = await graphql(query);

    const {
      twitterConsumerKey,
      twitterConsumerSecret,
      twitterAccessTokenKey,
      twitterAccessTokenSecret,
    } = pluginOptions;

    const twitter = new Twitter({
      consumer_key: twitterConsumerKey,
      consumer_secret: twitterConsumerSecret,
      access_token_key: twitterAccessTokenKey,
      access_token_secret: twitterAccessTokenSecret,
    });

    const { resolveURL } = pluginOptions;

    let count = 0;

    posts.forEach(({ post }) => {
      setTimeout(async () => {
        const { title } = post.frontmatter;
        const { slug } = post.fields;

        if (hasTweeted(slug)) return;

        const status = `
          ⚛️📝 ${title}
          ${resolveURL(slug)}
        `;

        let response;

        try {
          response = await twitter.post('statuses/update', {
            status,
          });
        } catch (err) {
          reporter.error(
            `gatsby-plugin-twitter-post | Can't create Tweet: ${err}`
          );
        }

        const {
          created_at: createdAt,
          id_str: tweetId,
          user: { id_str: userId },
        } = response;

        const tweetObject = {
          slug,
          createdAt,
          userId,
          tweetId,
          expectedTweetURL: `https://twitter.com/${userId}/status/${tweetId}`,
        };

        data.tweets.push(tweetObject);

        reporter.info(
          `gatsby-plugin-twitter-post | Tweet created: ${tweetObject.expectedTweetURL}`
        );

        saveFile();
      }, count * delayPerPost);

      count += 1;
    });
  } catch (err) {
    reporter.error(`gatsby-plugin-twitter-post | ERROR: ${err}`);
  }
};
