---
title: 'Gatsby: criando plugin para gerar Tweets'
date: 2019-12-07 21:55:00
description: 'Inclui criação de um plugin local para Gatsby, uso da API oficial do Twitter e Node File System.'
tags: ['gatsby', 'twitter', 'node', 'script', 'bot']
video: 'v25_0JpG_3Y'
thumbnailURL: 'https://img.youtube.com/vi/v25_0JpG_3Y/maxresdefault.jpg'
---

`youtube: https://www.youtube.com/watch?v=v25_0JpG_3Y`

Faaala Dev!

O vídeo acima pode ser extenso, mas não se trata de um conteúdo tão extenso quanto.
Por esse motivo, não vou ficar chateado se ninguém conseguir o assistir inteiro.

Este é um modelo de conteúdo para apresentar a <b>realidade do programador</b>.

## O problema

![](uploads/2019-12-07_plugin-gatsby-auto-tweet_component-image.jpg.png)

O componente acima pode ser encontrado no fim desse post, lá no final da página.

Representado na <b>ilustração</b>: o usuário que quiser comentar sobre o <i>post</i> precisa necessáriamente possuir uma conta no <i>Twitter</i> e, consequentemente, estar logado.

Vale lembrar que, neste momento, <b>não há</b> nenhum "<i>tweet inicial</i>" como <b>ponto de partida</b> para iniciar as discussões.

## Solução

Como apresentado no <a href="">Overreacted</a>, o Blog do <i>Dan Abramov</i>: a maneira como ele cria os <i>tweets</i> é manual.

Vamos criar um `plugin` em <a href="https://www.gatsbyjs.org/plugins/">Gatsby</a> que realiza a criação dos tweets durante o momento de <i>build</i> do meu website (que por acaso é hospedado no <i>Netlify</i>).

O objetivo é criar um `plugin` que cria um <i>tweet</i> para cada <i>post</i> escrito, respectivamente.

Esse funcionamento deve ser realizado no momento da `build` do Gatsby.

## Conclusão

O `tweet do Post` poderia ser feito manualmente. Não leva mais que <b>um minuto</b>.

Mas é muito legal trabalhar com <i>Gatsby</i> e entender como funciona, além de abrir a mente para diversos outros `plugins` que eu poderia desenvolver para o <i>Framework</i>, que cresce todos os dias.
