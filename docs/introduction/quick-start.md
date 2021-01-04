---
id: quick-start
title: Início Rápido
sidebar_label: Início Rápido
hide_title: true
---

# Início Rápido

## Propósito

O pacote **Redux Toolkit** pretende ser a forma padrão de escrever lógica Redux. Ele foi originalmente criado para ajudar a resolver três preocupações comuns sobre o Redux:

- "Configurar uma Redux store é muito complicado"
- "Tenho que adicionar muitos pacotes para que o Redux faça algo útil"
- "Redux requer muito código boilerplate"

Não podemos resolver todos os casos de uso, mas no espírito de [`create-react-app`](https://github.com/facebook/create-react-app) e [` apollo-boost`](https://dev-blog.apollodata.com/zero-config-graphql-state-management-27b1f1b3c2c3), podemos tentar fornecer algumas ferramentas que abstraem o processo de configuração e lidam com os casos de uso mais comuns, bem como incluem alguns utilitários úteis que permitirão ao usuário simplificar o código do aplicativo.

Por causa disso, este pacote é deliberadamente limitado em escopo. Ele _não_ aborda conceitos como "módulos Redux encapsulados reutilizáveis", armazenamento em cache de dados, estruturas de pastas ou arquivos, gerenciamento de relacionamentos de entidades na store e assim por diante.

Dito isso, **essas ferramentas devem ser benéficas para todos os usuários do Redux**. Quer você seja um novo usuário do Redux configurando seu primeiro projeto ou um usuário experiente que deseja simplificar um aplicativo existente, o **Redux Toolkit** pode ajudá-lo a tornar seu código Redux melhor.

## O que está incluído

O Redux Toolkit inclui estas APIs:

- [`configureStore()`](../api/configureStore.mdx): envolve o `createStore` para fornecer opções de configuração simplificadas e bons padrões. Ele pode combinar automaticamente seus redutores de slice, adiciona qualquer middleware Redux que você fornecer, inclui `redux-thunk` por padrão e permite o uso da extensão Redux DevTools.
- [`createReducer()`](../api/createReducer.mdx): que permite fornecer uma tabela de pesquisa de tipos de actions para funções reducers de caso, em vez de escrever instruções switch. Além disso, ele usa automaticamente a [biblioteca `immer`](https://github.com/immerjs/immer) para permitir que você escreva atualizações imutáveis ​​mais simples com código mutativo normal, como `state.todos[3].completed = true`.
- [`createAction()`](../api/createAction.mdx): gera uma função action creator para a string de tipo de action fornecida. A própria função tem `toString()` definido, para que possa ser usada no lugar da constante de tipo.
- [`createSlice()`](../api/createSlice.mdx): aceita um objeto de funções reducers, um nome de slice e um valor de estado inicial, e gera automaticamente um reducer de slice com action creators e tipos de action correspondentes.
- [`createAsyncThunk`](../api/createAsyncThunk.mdx): aceita uma string de tipo de action e uma função que retorna uma promessa e gera um thunk que despacha action types `pendente/cumprida/rejeitada` com base nessa promessa
- [`createEntityAdapter`](../api/createEntityAdapter.mdx): gera um conjunto de reducers e selectors reutilizáveis ​​para gerenciar dados normalizados na store
- O utilitário [`createSelector`](../api/createSelector.mdx) da biblioteca [Reselect](https://github.com/reduxjs/reselect), reexportado para facilidade de uso.

## Instalação

### Usando Create React App

The recommended way to start new apps with React and Redux Toolkit is by using the [official Redux+JS template](https://github.com/reduxjs/cra-template-redux) for [Create React App](https://github.com/facebook/create-react-app), which takes advantage of React Redux's integration with React components.
A maneira recomendada de iniciar novos aplicativos com React e Redux Toolkit é usando o [modelo oficial Redux + JS](https://github.com/reduxjs/cra-template-redux) para [Create React App](https://github.com/facebook/create-react-app), que aproveita a integração do React Redux com os componentes do React.

```sh
npx create-react-app my-app --template redux
```

### Em um aplicativo existente

O Redux Toolkit está disponível como um pacote no NPM para uso com um empacotador de módulo ou em um aplicativo Node:

```bash
# NPM
npm install @reduxjs/toolkit

# Yarn
yarn add @reduxjs/toolkit
```

Também está disponível como um pacote UMD pré-compilado que define uma variável global `window.RTK`.
O pacote UMD pode ser usado como uma [`<script>` tag](https://unpkg.com/@reduxjs/toolkit/dist/redux-toolkit.umd.js) diretamente.

## Ajuda e discussão

O **[canal #redux](https://discord.gg/reactiflux)** da **[comunidade Reactiflux no Discord](http://www.reactiflux.com)** é nosso recurso oficial para todas as questões relacionado a aprender e usar Redux. Reactiflux é um ótimo lugar para entrar, fazer perguntas e aprender - junte-se a nós!

You can also ask questions on [Stack Overflow](https://stackoverflow.com) using the **[#redux tag](https://stackoverflow.com/questions/tagged/redux)**.
Você também pode fazer perguntas no [Stack Overflow](https://stackoverflow.com) usando a **[tag #redux](https://stackoverflow.com/questions/tagged/redux)**.
