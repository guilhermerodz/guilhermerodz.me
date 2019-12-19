---
title: 'Permissões JWT'
date: 2019-11-30 23:00:00
description: 'Inclui grupos de funções (administrador, moderador, ajudante, etc).'
tags: ['authentication', 'json web token', 'roles', 'express', 'node']
thumbnailURL: 'https://img.youtube.com/vi/0XBSGmqP2Yw/maxresdefault.jpg'
---

`youtube: https://www.youtube.com/watch?v=0XBSGmqP2Yw`

Faaala Dev!

Este é um conteúdo extra do meu post de [autenticação JWT](http://guilhermerodz.me/posts/autenticacao-jwt-bcrypt/) com Node.js, Express e Bcrypt.

## O problema

Todo usuário cadastrado pode realizar ações específicas; outras ações são restritas apenas aos `moderadores`. Ações de nível superior precisam ser realizadas por `administradores`.

No entanto, nenhum usuário recebeu atribuição de grupo ou função. Também não há um sistema para interceptar as permissões.

## Solução

Vamos atribuir `roles` (funções) aos usuários registrados; por sua vez, poderão realizar ações baseadas em um sistema de permissão.

Por exemplo: se um usuário `moderador` está tentando realizar uma ação de nível `administrador`, o sistema nega a requisição e retorna o protocolo `401` ao cliente.
