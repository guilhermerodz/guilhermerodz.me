import React, { useState } from 'react';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import PropTypes from 'prop-types';
import qs from 'querystring';
// eslint-disable-next-line import/no-extraneous-dependencies
import algoliasearch from 'algoliasearch/lite';

import {
  InstantSearch,
  SearchBox,
  Stats,
  Configure,
  Hits,
} from 'react-instantsearch-dom';

import Hit from './Hit';
import Whoops from './Whoops';

import { Container, AlgoliaTitle, AlgoliaIcon } from './styles';

const trackSearch = term =>
  trackCustomEvent({
    category: 'Search',
    action: 'search',
    label: `Search - ${term}`,
  });

const urlToSearchState = ({ search }) => qs.parse(search.slice(1));

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
};

export default function Search({ fallbackComponent: Fallback, location }) {
  const [searchState, setSearchState] = useState(urlToSearchState(location));
  const [hitAmount, setHitAmount] = useState(0);

  const onSearchStateChange = updatedSearchState => {
    trackSearch(updatedSearchState.query);
    setSearchState(updatedSearchState);
  };

  const searchClient = algoliasearch(algolia.appId, algolia.searchKey);

  return (
    <Container>
      {algolia && algolia.appId ? (
        <div>
          <InstantSearch
            searchClient={searchClient}
            indexName={algolia.indexName}
            searchState={searchState}
            onSearchStateChange={onSearchStateChange}
          >
            <Configure hitsPerPage={100} distinct />
            <SearchBox translations={{ placeholder: 'Pesquisar no Blog...' }} />
            {searchState && searchState.query ? (
              <>
                <Stats
                  translations={{
                    stats(nbHits, timeSpent) {
                      setHitAmount(nbHits);

                      if (nbHits <= 0) return null;
                      return `${nbHits} resultado${
                        nbHits > 1 ? 's' : ''
                      } encontrados em ${timeSpent / 1000}s ⚡`;
                    },
                  }}
                />

                {hitAmount > 0 ? <Hits hitComponent={Hit} /> : <Whoops />}
              </>
            ) : (
              <nav>
                <Fallback />
              </nav>
            )}
          </InstantSearch>

          <AlgoliaTitle>
            Powered by Algolia
            <AlgoliaIcon />
          </AlgoliaTitle>
        </div>
      ) : (
        <nav>
          <Fallback />
        </nav>
      )}
    </Container>
  );
}

Search.propTypes = {
  fallbackComponent: PropTypes.oneOf([PropTypes.func, PropTypes.element])
    .isRequired,
  location: PropTypes.object.isRequired,
};
