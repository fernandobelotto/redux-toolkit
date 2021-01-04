---
id: basic-tutorial
title: Basic Tutorial
sidebar_label: Basic Tutorial
hide_title: true
---

# Tutorial básico: Apresentando a Redux Toolkit

Bem-vindo ao Redux Toolkit! Este tutorial mostrará as funções básicas incluídas no Redux Toolkit (também conhecido como "RTK" para abreviação).

Este tutorial presume que você já esteja familiarizado com os conceitos da biblioteca central [Redux](https://redux.js.org), bem como como usá-la com o [React](https://reactjs.org). Se não estiver, reserve um tempo para ler os [documentos do Redux](https://redux.js.org) e os [documentos do React-Redux](https://react-redux.js.org) primeiro, já que as explicações aqui se concentram em como o uso do RTK difere do código Redux "típico".

## Introdução: Escrevendo um aplicativo contador

Começaremos examinando o menor exemplo do Redux: um aplicativo de contador simples.

### Redux "Counter-Vanilla" Example

Os documentos do Redux têm um [exemplo "counter-vanilla"](https://redux.js.org/introduction/examples#counter-vanilla) que mostra como criar uma Redux store simples com um redutor que armazena um único número e responde aos tipos de ação `"INCREMENTO"` e `"REDUÇÃO"`. Você pode ver o [o código completo no CodeSandbox aqui](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter-vanilla), mas aqui está a seção importante:

```js
function counter(state, action) {
  if (typeof state === 'undefined') {
    return 0
  }

  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

var store = Redux.createStore(counter)

document.getElementById('increment').addEventListener('click', function() {
  store.dispatch({ type: 'INCREMENT' })
})
```

This section creates a reducer function called `counter`, ensures it uses a default state value of `0`, listens for `"INCREMENT"` and `"DECREMENT"` action types, and dispatches the `"INCREMENT"` action type when the button is clicked.
Esta seção cria uma função reducer chamada `counter`, garante que ele use um valor de estado padrão de `0`, escuta os tipos de action `"INCREMENTO"` e `"DECREMENTO"` e despacha o tipo de action `"INCREMENTO "` quando o botão é clicado.

### Um exemplo de contador mais típico

Embora este exemplo seja simples, também é um tanto irreal. A maioria dos aplicativos Redux são escritos usando a sintaxe ES6, incluindo argumentos padrão para parâmetros de função que são indefinidos. Também é uma prática comum escrever [funções action creators](https://redux.js.org/basics/actions#action-creators) em vez de escrever os objetos de action diretamente no código e escrever os tipos de action como constantes em vez de strings simples a cada vez.

Vamos reescrever o exemplo acima usando essas abordagens para ver como ficaria:

```js
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

function increment() {
  return { type: INCREMENT }
}

function decrement() {
  return { type: DECREMENT }
}

function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

const store = Redux.createStore(counter)

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment())
})
```

Como o exemplo é pequeno, isso não faz muita diferença na aparência. Em relação ao tamanho, salvamos algumas linhas usando um argumento padrão, mas escrever essas funções action creator tornou as coisas maiores. E, há alguma duplicação aqui. Escrever `const INCREMENT = 'INCREMENT'` parece bobo :) Especialmente quando está sendo usado apenas em dois lugares - o action creator e o reducer.

Além disso, as declarações switch incomodam muitas pessoas. Seria bom se pudéssemos substituí-lo por algum tipo de tabela de consulta.

### Apresentando: `configureStore`

O Redux Toolkit inclui várias funções para ajudar a simplificar seu código Redux. A primeira função que veremos é [`configureStore`](../api/configureStore.mdx).

Normalmente, você cria uma Redux store chamando `createStore()` e passando sua função reducer raiz. O Redux Toolkit possui uma função `configureStore()` que envolve `createStore()` para fazer a mesma coisa, mas também configura algumas ferramentas de desenvolvimento úteis para você como parte do processo de criação da store.

Podemos facilmente substituir a chamada `createStore` existente por `configureStore`. `configureStore` aceita um único objeto com campos nomeados, em vez de vários argumentos de função, então precisamos passar nossa função redutora como um campo denominado `reducer`:

```js
// Antes:
const store = createStore(counter)

// Depois:
const store = configureStore({
  reducer: counter
})
```

Isso provavelmente não parece muito diferente. Mas, sob os panos, a store foi configurada para permitir o uso da [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension) para visualizar o histórico de actions despachadas e como o estado da store mudou, e teve [algum middleware Redux incluído por padrão](../api/getDefaultMiddleware.mdx). Veremos isso com mais detalhes no próximo tutorial.

### Apresentando: `createAction`

A seguir, vamos dar uma olhada na [`createAction`](../api/createAction.mdx).

`createAction` aceita uma string de tipo de action como um argumento e retorna uma função action creator que usa essa string de tipo. (Sim, isso significa que o nome está um pouco incorreto - estamos criando uma "função action creator", não um "objeto de action", mas é mais curto e fácil de lembrar do que `createActionCreator`.) Portanto, esses dois exemplos são equivalentes :

```js
// Abordagem original: escreva o tipo de action e o action creator manualmente
const INCREMENT = 'INCREMENT'

function incrementOriginal() {
  return { type: INCREMENT }
}

console.log(incrementOriginal())
// {type: "INCREMENT"}

// Ou use `createAction` para gerar o action creator:
const incrementNew = createAction('INCREMENT')

console.log(incrementNew())
// {type: "INCREMENT"}
```

Mas e se precisarmos fazer referência à string do tipo de action em um reducer? Com `createAction`, você pode fazer isso de duas maneiras. Primeiro, o método `toString()` do action creator foi sobrescrito e retornará a string do tipo de action. Em segundo lugar, a string de tipo também está disponível como um campo `.type` na função:

```js
const increment = createAction('INCREMENT')

console.log(increment.toString())
// "INCREMENT"

console.log(increment.type)
// "INCREMENT"
```

Podemos usar `createAction` para simplificar o exemplo de contador anterior.

```js
const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')

function counter(state = 0, action) {
  switch (action.type) {
    case increment.type:
      return state + 1
    case decrement.type:
      return state - 1
    default:
      return state
  }
}

const store = configureStore({
  reducer: counter
})

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment())
})
```

Isso nos salvou algumas linhas novamente, e pelo menos não estamos repetindo a palavra `INCREMENTO` em todos os lugares.

### Apresentando: `createReducer`

Agora, vamos examinar a função reducer. Embora você possa usar qualquer lógica condicional que desejar em um reducer Redux, incluindo instruções `if` e loops, a abordagem mais comum é verificar o campo `action.type` e fazer alguma lógica específica para cada tipo de action. Um reducer também fornecerá um valor de estado inicial e retornará o estado existente se a action não for algo importante.

O Redux Toolkit inclui a [função `createReducer`](../api/createReducer.mdx) que permite escrever reducers usando um objeto "lookup table", onde cada chave no objeto é uma string do tipo de action, e os valores são funções reducers. Podemos usá-lo para substituir diretamente a definição da função `contador` existente. Uma vez que precisamos usar strings de tipo de action como as chaves, podemos usar a sintaxe [ES6 object "computed property"](http://javascript.info/object#computed-properties) para criar chaves a partir das variáveis ​​de string de tipo.

```js
const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')

const counter = createReducer(0, {
  [increment.type]: state => state + 1,
  [decrement.type]: state => state - 1
})
```

Ou, uma vez que a sintaxe das propriedades computadas chamará `toString()` em qualquer variável que esteja dentro, podemos apenas usar as funções action creators diretamente sem o campo `.type`:

```js
const counter = createReducer(0, {
  [increment]: state => state + 1,
  [decrement]: state => state - 1
})
```

Para ver o código completo até agora, veja [este CodeSandbox mostrando o uso de `createAction` e `createReducer`](https://codesandbox.io/s/counter-vanilla-redux-toolkit-sjouq).

### Apresentando: `createSlice`

Vamos revisar a aparência do exemplo do contador neste ponto:

```js
const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')

const counter = createReducer(0, {
  [increment]: state => state + 1,
  [decrement]: state => state - 1
})

const store = configureStore({
  reducer: counter
})

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment())
})
```

Isso não é ruim, mas podemos fazer mais uma mudança importante nisso. Por que precisamos gerar os action creators separadamente ou escrever essas strings de tipo de action? A parte realmente importante aqui são as funções do reducer.

É aí que entra a função [`createSlice`](../api/createSlice.mdx). Ela nos permite fornecer a um objeto as funções reducers e irá gerar automaticamente as strings de tipo de action e funções action creators com base nos nomes dos reducers listados.

`createSlice` retorna um objeto "slice" que contém a função reducer gerada como um campo denominado `redutor` e os action creators gerados dentro de um objeto denominado `actions`.

Aqui está como nosso exemplo de contador ficaria usando `createSlice` em vez disso:

```js
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
})

const store = configureStore({
  reducer: counterSlice.reducer
})

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(counterSlice.actions.increment())
})
```

Na maioria das vezes, você provavelmente desejará usar a sintaxe de desestruturação do ES6 para extrair as funções do action creator como variáveis ​​e, possivelmente, o reducer também:

```js
const { actions, reducer } = counterSlice
const { increment, decrement } = actions
```

## Resumo

Vamos recapitular o que as funções fazem:

- `configureStore`: cria uma instância de Redux store como o `createStore` original do Redux, mas aceita um objeto de opções nomeado e configura a extensão Redux DevTools automaticamente
- `createAction`: aceita uma string de tipo de action e retorna uma função action creator que usa esse tipo
- `createReducer`: aceita um valor de estado inicial e uma tabela de pesquisa de tipos de action para funções reducers e cria um reducer que lida com todos esses tipos de action
- `createSlice`: aceita um estado inicial e uma tabela de pesquisa com nomes e funções reducers e gera automaticamente funções action creators, strings de tipo de action e uma função reducer.

Observe que nada disso mudou nada sobre o funcionamento do Redux. Ainda estamos criando uma Redux store, despachando objetos de action que descrevem "o que aconteceu" e retornando o estado atualizado usando uma função reducer. Além disso, observe que as funções do Redux Toolkit podem ser usadas independentemente de qual abordagem foi usada para construir a UI, uma vez que elas apenas lidam com a parte do código "simples Redux store". Nosso exemplo usou a store com uma IU "vanilla JS", mas poderíamos usar essa mesma store com React, Angular, Vue ou qualquer outra camada de IU.

Finalmente, se você olhar cuidadosamente para o exemplo, verá que há um lugar onde escrevemos alguma lógica assíncrona - o botão "incrementar assíncrono":

```js
document.getElementById('incrementAsync').addEventListener('click', function() {
  setTimeout(function() {
    store.dispatch(increment())
  }, 1000)
})
```
Você pode ver que estamos mantendo o tratamento assíncrono separado da lógica do reducer e despachamos uma action quando o armazenamento precisa ser atualizado. Redux Toolkit não muda nada sobre isso.

Aqui está o exemplo completo em uma sandbox:

<iframe src="https://codesandbox.io/embed/counter-vanilla-createslice-redux-toolkit-6gkxx?fontsize=14&hidenavigation=1&theme=dark&view=editor"
     style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }} 
     title="counter-vanilla createSlice - Redux Toolkit"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

Agora que você conhece os princípios básicos de cada função, a próxima etapa é tentar usá-los em um exemplo _um pouco_ maior para ver mais como eles funcionam. Abordaremos isso no [Tutorial intermediário](./intermediário-tutorial.md).
