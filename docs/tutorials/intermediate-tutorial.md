---
id: intermediate-tutorial
title: Tutorial intermediário
sidebar_label: Tutorial intermediário
hide_title: true
---

# Tutorial intermediário: Redux Toolkit em ação

No [Tutorial básico](./basic-tutorial.md), você viu as principais funções da API que estão incluídas no Redux Toolkit e alguns exemplos curtos de por que e como usá-las. Você também viu que pode usar Redux e RTK a partir de uma tag de script JS simples em uma página HTML, sem usar React, NPM, Webpack ou quaisquer ferramentas de build.

Neste tutorial, você verá como usar essas APIs em um pequeno aplicativo React. Especificamente, vamos converter o [aplicativo de exemplo "todos" original do Redux](https://redux.js.org/introduction/examples#todos) para usar RTK.

Isso mostrará vários conceitos:

- Como converter o código "Redux simples" para usar RTK
- Como usar RTK em um aplicativo React + Redux típico
- Como alguns dos recursos mais poderosos do RTK podem ser usados ​​para simplificar seu código Redux

Além disso, embora isso não seja específico do RTK, veremos algumas maneiras de melhorar seu código React-Redux também.

O código-fonte completo para o aplicativo convertido deste tutorial está disponível em [github.com/reduxjs/rtk-convert-todos-example](https://github.com/reduxjs/rtk-convert-todos-example). Percorreremos o processo de conversão, conforme mostrado no histórico deste repo. Links para commits individuais significativos serão destacados em blocos de citações, como este:

> - Commit message here

## Revisando o exemplo Redux Todos

Se inspecionarmos [o código-fonte de exemplo "todos" atual](https://github.com/reduxjs/redux/tree/9c9a4d2a1c62c9dbddcbb05488f8bd77d24c81de/examples/todos/src), podemos observar algumas coisas:

- A função reducer [`todos`](https://github.com/reduxjs/redux/blob/9c9a4d2a1c62c9dbddcbb05488f8bd77d24c81de/examples/todos/src/reducers/todos.js) está fazendo atualizações imutáveis "à mão", copiando objetos aninhados e arrays
- O [arquivo `actions`](https://github.com/reduxjs/redux/blob/9c9a4d2a1c62c9dbddcbb05488f8bd77d24c81de/examples/todos/src/actions/index.js) tem funções action creators escritas à mão e as strings de tipo de action estão sendo duplicados entre o arquivo de actions e os arquivos de reducers
- O código é apresentado usando uma [estrutura "pasta por tipo"](https://redux.js.org/faq/code-structure#what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go), com arquivos separados para `actions` e `reducers`
- Os componentes React são escritos usando uma versão estrita do padrão ["container/presentational"](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0), onde [os componentes "presentational" estão em uma pasta](https://github.com/reduxjs/redux/tree/9c9a4d2a1c62c9dbddcbb05488f8bd77d24c81de/examples/todos/src/components), e as definições de conexão [Redux "contêiner" estão em uma pasta diferente](https://github.com/reduxjs/redux/tree/9c9a4d2a1c62c9dbddcbb05488f8bd77d24c81de/examples/todos/src/containers)
- Parte do código não está seguindo alguns dos padrões de "melhores práticas" do Redux que recomendados. Veremos alguns exemplos específicos ao longo deste tutorial.

Por um lado, este é um pequeno aplicativo de exemplo. O objetivo é ilustrar os fundamentos do uso real de React e Redux juntos, e não necessariamente ser usado como "a maneira certa" de fazer as coisas em um aplicativo de produção em escala real. Por outro lado, a maioria das pessoas usará os padrões que vêem em documentos e exemplos e, definitivamente, há espaço para melhorias aqui.

## Etapas de conversão inicial

### Adicionando Redux Toolkit ao projeto

Como o exemplo de todos original está no repositório Redux, começamos copiando o código-fonte "todos" do Redux para um novo projeto Create-React-App e adicionando Prettier ao projeto para ajudar a garantir que o código seja formatado de forma consistente. Há também um arquivo [jsconfig.json](https://code.visualstudio.com/docs/languages/jsconfig) para nos permitir usar "caminhos de importação absolutos" que começam na pasta `/src`.

> - [Commit inicial](https://github.com/reduxjs/rtk-convert-todos-example/commit/a8e0a9a9d77b9dcd9e881079e7cca449084ca7b1).
> - [Adicione jsconfig.json para suportar importações absolutas](https://github.com/reduxjs/rtk-convert-todos-example/commit/b866e205b9ebece84367f11d2faabc557bd08e23)

No tutorial básico, acabamos de criar um link para o Redux Toolkit como uma tag de script individual. Mas, em um aplicativo típico, você precisa adicionar RTK como uma dependência de pacote em seu projeto. Isso pode ser feito com os gerenciadores de pacotes NPM ou Yarn:

```bash
# Se você estiver usando o NPM:
npm install @reduxjs/toolkit

# Ou com Yarn:
yarn add @reduxjs/toolkit
```
Depois de concluído, você deve adicionar e confirmar o arquivo `package.json` modificado e o "arquivo lock" do seu gerenciador de pacotes (`package-lock.json` para NPM, ou `yarn.lock` para Yarn).

> - [Adicionar Redux Toolkit](https://github.com/reduxjs/rtk-convert-todos-example/commit/c3f47aeaecf855561e4db9d452b928f1b8b6c016)

Feito isso, podemos começar a trabalhar no código.

### Convertendo a store para usar `configureStore`

Assim como no exemplo do "contador", podemos substituir a função simples do Redux `createStore` pelo` configureStore` do RTK. Isso configurará automaticamente a extensão Redux DevTools para nós.

As mudanças aqui são simples. Atualizamos `src/index.js` para importar `configureStore` em vez da `createStore`, e substituímos a chamada da função. Lembre-se de que `configureStore` recebe um objeto de opções como um parâmetro com campos nomeados, então em vez de passar `rootReducer` diretamente como o primeiro parâmetro, nós o passamos como um campo de objeto chamado `reducer`:

> - [Converter a store para usar configureStore](https://github.com/reduxjs/rtk-convert-todos-example/commit/cdfc15edbd82beda9ef0521aa191574b6cc7695a)

```diff {3-4,9-12}
import React from "react";
import { render } from "react-dom";
-import { createStore } from "redux";
+import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";

- const store = createStore(rootReducer);
+ const store = configureStore({
+   reducer: rootReducer,
+});
```

**Observe que ainda estamos usando a mesma função de redutor de raiz que já está no aplicativo e uma Redux store ainda está sendo criada. Tudo o que mudou é que a sotre é configurada automaticamente com ferramentas para ajudá-lo no desenvolvimento.**

Se você tiver [a extensão do navegador Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension) instalada, você agora deve ser capaz de ver o estado atual se iniciar o aplicativo no modo de desenvolvimento e abrir a Extensão DevTools. Algo assim:

![Redux DevTools Extension screenshot showing initial state](/assets/tutorials/intermediate/int-tut-01-redux-devtools.png)

## Criando o Todos Slice

A primeira grande etapa para reescrever o aplicativo é converter a lógica Todos em um novo "slice".

### Entendendo Slices

No momento, o código todos está dividido em duas partes. A lógica do reducer está em `reducers/todos.js`, enquanto os action creators estão em `actions/index.js`. Em um aplicativo maior, podemos até ver as constantes de tipo de action em seu próprio arquivo, como `constants/todos.js`, para que possam ser reutilizadas em ambos os lugares.

Nós _podemos_ substituir aqueles que usam as funções [`createReducer`](../api/createReducer.mdx) e [`createAction`](../api/createAction.mdx). No entanto, a função do RTK [`createSlice`](../api/createSlice.mdx) nos permite consolidar essa lógica em um só lugar. Ele usa `createReducer` e `createAction` internamente, então **na maioria dos aplicativos, você não precisa usá-los - `createSlice` é tudo que você precisa**.

Você pode estar se perguntando, "o que é um 'slice', afinal?". Uma aplicação Redux normal tem um objeto JS no topo de sua árvore de estado, e esse objeto é o resultado da chamada da função Redux [`combineReducers`](https://redux.js.org/api/combinereducers) para juntar múltiplos o reducer funciona em um "reducer raiz" maior. **Referimo-nos a uma seção de chave/valor desse objeto como "slice" e usamos o termo ["reducer slice"](https://redux.js.org/recipes/structuring-reducers/splitting-reducer-logic) para descrever a função reducer responsável por atualizar aquela slice (fatia) do estado**.

Neste aplicativo, o reducer raiz se parece com:

```js
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})
```

Portanto, o estado combinado se parece com `{todos: [], visibilityFilter:" SHOW_ALL"}`. `state.todos` é uma "slice", e a função reducer `todos` é um "slice reducer".

### Examinando o reducer de todos original

A lógica do reducer todos original se parece com isto:

```js
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export default todos
```

Podemos ver que ele lida com três casos:

- Adiciona um novo todo copiando o array `state` existente e adicionando uma nova entrada de todo no final
- Ele lida com alternar uma entrada de todo copiando o array existente usando `state.map()`, copia e substitui o objeto de todos que precisa ser atualizado e deixa todas as outras entradas de todos sozinhas.
- Ele responde a todas as outras actions retornando o estado existente (efetivamente dizendo "Não me importo com essa action").

Ele também inicializa o estado com um valor padrão de `[]` e faz uma exportação padrão da função reducer.

### Escrevendo o slice reducer

Podemos fazer o mesmo trabalho com `createSlice`, mas podemos fazê-lo de uma forma mais simples.

Começaremos adicionando um novo arquivo chamado `/features/todos/todosSlice.js`. Observe que, embora não importe como você realmente estrutura suas pastas e arquivos, descobrimos que [uma abordagem de "pasta de recursos"](https://redux.js.org/faq/code-structure#what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go) geralmente funciona melhor para a maioria formulários. O nome do arquivo também depende inteiramente de você, mas é razoável usar uma convenção de `someFeatureSlice.js`.

Neste arquivo, adicionaremos a seguinte lógica:

> - [Adicionar um slice inicial de todos](https://github.com/reduxjs/rtk-convert-todos-example/commit/48ce059dbb0fce1b961631821534fbcb766d3471)

```js
import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const { id, text } = action.payload
      state.push({ id, text, completed: false })
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

export const { addTodo, toggleTodo } = todosSlice.actions

export default todosSlice.reducer
```

#### Opções de `createSlice`

Vamos analisar o que isso faz:

- `createSlice` takes an options object as its argument, with these options:
  - `name`: a string that is used as the prefix for generated action types
  - `initialState`: the initial state value for the reducer
  - `reducers`: an object, where the keys will become action type strings, and the functions are reducers that will be run when that action type is dispatched. (These are sometimes referred to as ["case reducers"](https://redux.js.org/recipes/structuring-reducers/splitting-reducer-logic), because they're similar to a `case` in a `switch` statement)

Assim, a função reducer de caso `addTodo` será executada quando uma action com o tipo `"todos/addTodo"` for despachada.

Não há manipulador `default` aqui. O reducer gerado por `createSlice` irá lidar automaticamente com todos os outros tipos de action, retornando o estado atual, então não temos que listar isso nós mesmos.

#### Atualizar Lógica "Mutável"

Observe que o reducer `addTodo` está chamando `state.push()`. Normalmente, isso é ruim, porque [a função `array.push()` altera o array existente](https://doesitmutate.xyz/#push) e **[Redux reducers devem _nunca_ sofrer mutação!](Https://redux.js.org/basics/reducers#handling-actions)**.

No entanto, `createSlice` e `createReducer` envolvem sua função com [`produce` da biblioteca Immer](https://github.com/immerjs/immer). **Isso significa que você pode escrever um código que "modifique" o estado dentro do reducer, e o Immer retornará com segurança um resultado correto atualizado imutavelmente.**

Da mesma forma, `toggleTodo` não mapeia o array nem copia o objeto de todos correspondente. Em vez disso, ele apenas encontra o objeto de todo correspondente e o altera atribuindo `todo.completed = !Todo.completed`. Novamente, o Immer sabe que esse objeto foi atualizado e faz cópias do objeto todo e do array que o contém.

A lógica normal de atualização imutável tende a obscurecer o que você está realmente tentando fazer por causa de todas as cópias extras que precisam acontecer. Aqui, a intenção deve ser muito mais clara: estamos adicionando um item ao final de uma matriz e modificando um campo em uma entrada de tarefas.

#### Exportando as funções do Slice

`createSlice` retorna um objeto parecido com este:

```js
{
  name: "todos",
  reducer: (state, action) => newState,
  actions: {
    addTodo: (payload) => ({type: "todos/addTodo", payload}),
    toggleTodo: (payload) => ({type: "todos/toggleTodo", payload})
  },
  caseReducers: {
    addTodo: (state, action) => newState,
    toggleTodo: (state, action) => newState,
  }
}
```

**Observe que ele gerou automaticamente as funções actions creators apropriadas _e_ tipos de action para cada um de nossos reducers - não precisamos escrevê-los à mão!**

Precisaremos usar os action creators e o reducer em outros arquivos, então, no mínimo, precisaríamos exportar o objeto slice. No entanto, podemos usar uma convenção de código da comunidade Redux chamada [o padrão "ducks"](https://github.com/erikras/ducks-modular-redux). Simplificando, **ele sugere que você deve colocar todos os seus action creators e reducers em um arquivo, fazer exportações nomeadas dos action creators e uma exportação padrão da função reducer**.

Graças ao `createSlice`, já temos nossos action creators e reducer bem aqui em um arquivo. Tudo o que temos a fazer é exportá-los separadamente e nosso arquivo de slice agora corresponde ao padrão comum "ducks".

#### Trabalhando com payloads

Falando dos action creators, vamos voltar e reexaminar a lógica do reducer por um minuto.

Por padrão, os action creators da função RTK `createAction` aceitam apenas um argumento. Esse argumento, seja ele qual for, é colocado no objeto de action como um campo chamado `payload`.

Não há nada de especial sobre o campo `action.payload` por si só. Redux não conhece ou se preocupa com esse nome. Mas, como "ducks", o nome `payload` vem de outra convenção da comunidade Redux chamada ["Flux Standard Actions"](https://github.com/redux-utilities/flux-standard-action).

As actions geralmente precisam incluir alguns dados extras junto com o campo `type`. O código Redux original para `addTodo` tem um objeto de action que se parece com `{type, id, text}`. **A convenção FSA sugere que em vez de ter campos de dados com nomes aleatórios diretamente no objeto de action, você deve sempre colocar seus dados dentro de um campo denominado `payload`**.

Cabe ao reudcer estabelecer o que ele pensa que a `payload` deve ser para cada tipo de action, e qualquer código que despache a action precisa passar valores que correspondam a essa expectativa. Se apenas um valor for necessário, você poderia usá-lo diretamente como o valor `payload` inteiro. Mais comumente, você precisa passar vários valores; nesse caso, `payload` deve ser um objeto contendo esses valores.

Em nosso slice todos, `addTodo` precisa de dois campos, `id` e `text`, então os colocamos em um objeto como `payload`. Para `toggleTodo`, o único valor que precisamos é o `id` do todo sendo alterado. Poderíamos ter feito isso como `payload`, mas eu prefiro sempre ter `payload` como um objeto, então eu fiz `action.payload.id`.

(Como uma prévia: existe _sim_ uma maneira de personalizar como os payloads do objeto de action são criados. Veremos isso mais tarde neste tutorial, ou você pode consultar [os documentos da API `createAction`](../api/createAction.mdx) para obter uma explicação.)

### Atualizando os Testes Todos

O reducer de todos original tem um arquivo de testes com ele. Podemos transferi-los para trabalhar com nosso slice de todos e verificar se ambos funcionam da mesma maneira.

O primeiro passo é copiar `reducers/todos.spec.js` para `features/todos/todosSlice.spec.js`, e alterar o caminho de importação para ler o reducer do arquivo slice.

> - [Copie os testes para todos slice](https://github.com/reduxjs/rtk-convert-todos-example/commit/b603312ddf55899e8a75522d407c40474948ae0b)

Feito isso, precisamos atualizar os testes para corresponder ao funcionamento do RTK.

O primeiro problema é que o arquivo de teste codifica os tipos de action como `'ADD_TODO'`. Os tipos de action do RTK se parecem com `'todos/addTodo'`. Podemos fazer referência a isso importando também os action creators da slice todos e substituindo as constantes de tipo original no teste por `addTodo.type`.

O outro problema é que os objetos de action nos testes se parecem com `{type, id, text}`, enquanto o RTK sempre coloca esses valores extras dentro de `action.payload`. Portanto, precisamos modificar as actions de teste para corresponder a isso.

(Nós realmente _podemos_ apenas substituir todos os objetos de action inline no teste por chamadas como `addTodo ({id: 0, text:" Buy milk "})`, mas este é um conjunto mais simples de alterações para mostrar por enquanto.)

> - [Transfira os testes todos para trabalhar com o slice todos](https://github.com/reduxjs/rtk-convert-todos-example/commit/39dbbf37bd4c559db956c8291bbd0bf1135546bb)

Um exemplo das mudanças seria:

```diff
// Altere as importações para obter os action creators
-import todos from './todosSlice'
+import todos, { addTodo, toggleTodo } from './todosSlice'

// depois, em um teste:
  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
-       type: 'ADD_TODO',
-       text: 'Run the tests',
-       id: 0
+       type: addTodo.type,
+       payload: {
+         text: 'Run the tests',
+         id: 0
+       }
      })
    ).toEqual([
```

Após essas mudanças, todos os testes em `todosSlice.spec.js` devem passar, provando que nosso novo reducer de slice RTK funciona exatamente da mesma forma que o reducer original escrito à mão!

### Implementando IDs de Todo

No código original, cada todo recém-adicionada obtém um valor de ID (um número crescente):

```js
let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
```
No momento, nosso slice de todos não faz isso, porque o action creator `addTodo` é gerado automaticamente para nós.

Nós _podemos_ adicionar esse comportamento para exigir que qualquer código que envie o add todo deva passar um novo ID, como `addTodo ({id: 1, text: "Buy milk"})`, mas isso seria irritante. Por que o chamador deve rastrear esse valor? Além disso, e se houver várias partes do aplicativo que precisariam despachar essa action? Seria melhor encapsular essa lógica no action creator.

O RTK permite que você personalize como o campo `payload` é criado em seus objetos de action. Se você estiver usando `createAction` por si só, pode passar um "prepare callback" como o segundo argumento. Esta seria a aparência:

> - [Implementar geração de ID addTodo](https://github.com/reduxjs/rtk-convert-todos-example/commit/0c9e3b721c209d368d23a70cf8faca8f308ff8df)

```js
let nextTodoId = 0

export const addTodo = createAction('ADD_TODO', text => {
  return {
    payload: { id: nextTodoId++, text }
  }
})
```

**Observe que o "preparar callback" _deve_ retornar um objeto com um campo chamado `payload` dentro!** Caso contrário, o payload da action será undefined. Ele _pode_ também incluir um campo chamado `meta`, que pode ser usado para incluir metadados adicionais adicionais relacionados à action.

Se você estiver usando `createSlice`, ele chama automaticamente `createAction` para você. Se precisar personalizar a carga útil lá, você pode fazer isso passando um objeto contendo as funções `reducer` e `prepare` para o objeto `reducers`, em vez de apenas a função reducer em si:

```js
let nextTodoId = 0

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        const { id, text } = action.payload
        state.push({ id, text, completed: false })
      },
      prepare(text) {
        return { payload: { text, id: nextTodoId++ } }
      }
    }
  }
}
```

Podemos adicionar um teste adicional que confirma que isso funciona:

```js
describe('addTodo', () => {
  it('should generate incrementing todo IDs', () => {
    const action1 = addTodo('a')
    const action2 = addTodo('b')

    expect(action1.payload).toEqual({ id: 0, text: 'a' })
    expect(action2.payload).toEqual({ id: 1, text: 'b' })
  })
})
```

## Usando o Novo Slice de Todos

### Atualizando o reducer raiz

Temos uma função reducer totalmente nova e brilhante, mas ela ainda não está conectada a nada.

A primeira etapa é atualizar nosso reducer root para usar o slice reducer todos em vez do reducer original. Precisamos apenas alterar a instrução de importação em `reducers/index.js`:

> - [Use o slice reducer todos](https://github.com/reduxjs/rtk-convert-todos-example/commit/7b6e005377c856d7415e328387188260330ebae4)

```diff
import { combineReducers } from 'redux'
-import todos from './todos'
+import todosReducer from 'features/todos/todosSlice'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
- todos,
+ todos: todosReducer,
  visibilityFilter
})
```

Embora pudéssemos ter mantido a função importada nomeada como `todos` para que possamos usar a abreviação literal do objeto com `combineReducers`, é um pouco mais claro se nomearmos a função importada como `todosReducer` e definir o campo como `todos: todosReducer`.

### Atualizando o componente Add Todo

Se recarregarmos o aplicativo, ainda devemos ver que `state.todos` é um array vazio. Mas, se clicarmos em "Adicionar Todo", nada acontecerá. Ainda estamos despachando ações cujo tipo é `'ADD_TODO'`, enquanto nosso slice de todos está procurando por um tipo de ação `'todos/addTodo'`. Precisamos importar o action creator correta e usá-lo no arquivo `AddTodo.js`.

Já que estamos nisso, existem alguns outros problemas com como o componente `AddTodo` é escrito. Primeiro, ele está usando uma "referência de retorno" do React para ler o valor de texto atual da entrada quando você clica em "Add Todo". Isso funciona, mas a "forma de reação" padrão para lidar com os campos do formulário é com o padrão de "entradas controladas", onde o valor do campo atual é armazenado no estado do componente.

Em segundo lugar, o componente conectado está recebendo `dispatch` como prop. Novamente, isso funciona, mas a maneira normal de usar connect é [passar as funções do action creator para `connect`](https://react-redux.js.org/using-react-redux/connect-mapdispatch) e, em seguida, despacha as action chamando as funções que foram passadas como props.

Uma vez que temos esse componente aberto, podemos corrigir esses problemas também. Esta é a aparência da versão final:

> - [Atualizar AddTodo para despachar o novo tipo de action](https://github.com/reduxjs/rtk-convert-todos-example/commit/d7082409ebaa113b74f6989bf70ee09600f37d0b)

```js
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from 'features/todos/todosSlice'

const mapDispatch = { addTodo }

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('')

  const onChange = e => setTodoText(e.target.value)

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!todoText.trim()) {
            return
          }
          addTodo(todoText)
          setTodoText('')
        }}
      >
        <input value={todoText} onChange={onChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect(null, mapDispatch)(AddTodo)
```

Começamos importando o action creator `addTodo` correto de nosso slice de todos.

A entrada agora está sendo tratada como uma "entrada controlada" padrão, com o valor do texto sendo armazenado no estado do componente. Podemos usar esse valor de texto de estado no manipulador de envio do formulário.

Finalmente, usamos a forma ["abreviação de objeto" de `mapDispatch`](https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object) para simplifique a passagem dos action creator para `connect`. A versão "vinculada" de `addTodo` é passada para o componente como um prop e despachará a action assim que a chamarmos.

### Atualizando a lista de todos

Os componentes `TodoList` e `VisibleTodoList` têm problemas semelhantes: eles estão usando o antigo action creator `toggleTodo`, e a configuração `connect` não está usando a forma "abreviação de objeto" de `mapDispatch`. Podemos consertar ambos.

> - [Atualize TodoList para despachar o novo tipo de action de toggle](https://github.com/reduxjs/rtk-convert-todos-example/commit/b47b2124d6a28386b7461bccb9216682a81edb3e)

```diff
// VisibleTodoList.js
-import { toggleTodo } from '../actions'
+import { toggleTodo } from 'features/todos/todosSlice'

-const mapDispatchToProps = dispatch => ({
- toggleTodo: id => dispatch(toggleTodo(id))
-})
+const mapDispatchToProps = { toggleTodo }
```

E com isso, agora devemos ser capazes de adicionar e alternar todos novamente, mas usando nosso novo slice de todos!

## Criando e usando o slice de filtros

Agora que criamos o slice todos e o conectamos à IU, podemos fazer o mesmo para a lógica de seleção de filtro.

### Escrevendo o slice de filtros

A lógica do filtro é muito simples. Temos uma action, que define o valor do filtro atual, retornando o que está na action. Aqui está a fatia inteira:

> - [Add the filters slice](https://github.com/reduxjs/rtk-convert-todos-example/commit/b77f4155e3b45bce24d0d0ef6e2f7b0c3bd11ee1)

```js
import { createSlice } from '@reduxjs/toolkit'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const filtersSlice = createSlice({
  name: 'visibilityFilters',
  initialState: VisibilityFilters.SHOW_ALL,
  reducers: {
    setVisibilityFilter(state, action) {
      return action.payload
    }
  }
})

export const { setVisibilityFilter } = filtersSlice.actions

export default filtersSlice.reducer
```

Copiamos o objeto enum `VisibilityFilters` que estava originalmente em `actions/index.js`. O código do slice apenas cria um reducer, exportamos o action creator e o reducer e pronto.

### Usando a Slice de filtros

Assim como com o reducer todos, precisamos importar e adicionar o reducer de visibilidade ao nosso reducer root:

> - [Use o slice reducer de filtros](https://github.com/reduxjs/rtk-convert-todos-example/commit/623c47b1987914a1d90142824892686ec76c20a1)

```diff
import todosReducer from 'features/todos/todosSlice'
-import visibilityFilter from './visibilityFilter'
+import visibilityFilterReducer from 'features/filters/filtersSlice'

export default combineReducers({
  todos: todosReducer,
- visibilityFilter
+ visibilityFilter: visibilityFilterReducer
})
```

A partir daí, precisamos despachar a action `setVisibilityFilter` quando o usuário clicar nos botões. Primeiro, para consistência, devemos atualizar `VisibleTodoList.js` e `Footer.js` para usar o enum `VisibilityFilter` que é exportado do arquivo do slice de filtro, em vez daquele do arquivo de actions.

A partir daí, os componentes do link darão um pouco mais de trabalho. `FilterLink` está atualmente criando novas funções que capturam o valor atual de `ownProps.filter`, de modo que `Link` está apenas obtendo uma função chamada `onClick`. Embora seja uma maneira válida de fazer isso, para consistência, gostaríamos de continuar usando a forma abreviada de objeto de `mapDispatch` e modificar` Link` para passar o valor do filtro quando ele despacha a action.

> - [Use a nova action de filter na UI](https://github.com/reduxjs/rtk-convert-todos-example/commit/776b39088384513ff68af41039fe5fc5188fe8fb)

```diff
// FilterLink.js
-import { setVisibilityFilter } from '../actions'
+import { setVisibilityFilter } from 'features/filters/filtersSlice'

-const mapDispatchToProps = (dispatch, ownProps) => ({
- onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
-})
+const mapDispatchToProps = { setVisibilityFilter }


// Link.js
import React from 'react'
import PropTypes from 'prop-types'

-const Link = ({ active, children, onClick }) => (
+const Link = ({ active, children, setVisibilityFilter, filter }) => (
  <button
-    onClick={onClick}
+    onClick={() => setVisibilityFilter(filter)}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
- onClick: PropTypes.func.isRequired
+ setVisibilityFilter: PropTypes.func.isRequired,
+ filter: PropTypes.string.isRequired
}

export default Link
```

Novamente, observe que a maior parte disso não tem a ver com RTK especificamente, mas é bom tentar usar de forma consistente algumas das melhores práticas recomendadas neste código de exemplo.

Feito isso, devemos ser capazes de adicionar algumas todos, alternar o estado de algumas delas e, em seguida, alternar os filtros para alterar a lista de exibição.

## Otimizando a filtragem de todo

O componente `VisibleTodoList` atualmente usa uma função chamada `getVisibleTodos` para fazer o trabalho de filtrar o array de todos para exibição. Esta é uma "função selector", conforme descrito na página Redux docs em [Computing Derived Data](https://redux.js.org/recipes/computing-derived-data). Ele encapsula o processo de leitura de valores da Redux store e extração de parte ou todos esses valores para uso.

No entanto, o código como escrito atualmente tem um problema. Se o filtro for definido como `SHOW_COMPLETED` ou `SHOW_ACTIVE`, ele _sempre_ retornará um novo array toda vez que for chamado. Já que está sendo usado em uma função `mapState`, isso significa que ele retornará uma nova referência de array quando _qualquer_ action for despachada.

Neste pequeno aplicativo de exemplo de todos, isso não é um problema. As únicas action que temos envolvem alterar a lista de todos ou filtrá-la, de qualquer maneira. Mas, em um aplicativo real, muitas outras actions serão despachadas. Imagine se este aplicativo de tarefas tivesse um contador e `"INCREMENT"` fosse despachado enquanto a lista era filtrada. Criaríamos uma nova lista e `TodoList` teria que ser renderizado novamente, mesmo que nada mudasse.

Embora esse não seja um problema real de desempenho agora, vale a pena mostrar como podemos melhorar o comportamento.

Aplicativos Redux normalmente usam uma biblioteca chamada [Reselect](https://github.com/reduxjs/reselect), que tem uma função `createSelector` que permite definir funções selectors "memoizadas". Esses selectors memoizados apenas recalculam os valores se as entradas foram realmente alteradas.

O RTK reexporta a função `createSelector` de Reselect, para que possamos importá-la e usá-la em `VisibleTodoList`.

> - [Converter todos visíveis em um selector memoizado](https://github.com/reduxjs/rtk-convert-todos-example/commit/4fc943b7111381974f20f74750a114b5e52ce1b2)

```diff
import { connect } from 'react-redux'
+import { createSelector } from '@reduxjs/toolkit'
import { toggleTodo } from 'features/todos/todosSlice'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from 'features/filters/filtersSlice'

-const getVisibleTodos = (todos, filter) => {
-  switch (filter) {
-    case VisibilityFilters.SHOW_ALL:
-      return todos
-    case VisibilityFilters.SHOW_COMPLETED:
-      return todos.filter(t => t.completed)
-    case VisibilityFilters.SHOW_ACTIVE:
-      return todos.filter(t => !t.completed)
-    default:
-      throw new Error('Unknown filter: ' + filter)
-  }
-}

+const selectTodos = state => state.todos
+const selectFilter = state => state.visibilityFilter

+const selectVisibleTodos = createSelector(
+  [selectTodos, selectFilter],
+  (todos, filter) => {
+    switch (filter) {
+      case VisibilityFilters.SHOW_ALL:
+        return todos
+      case VisibilityFilters.SHOW_COMPLETED:
+        return todos.filter(t => t.completed)
+      case VisibilityFilters.SHOW_ACTIVE:
+        return todos.filter(t => !t.completed)
+      default:
+        throw new Error('Unknown filter: ' + filter)
+    }
+  }
+)

const mapStateToProps = state => ({
- todos: getVisibleTodos(state.todos, state.visibilityFilter)
+ todos: selectVisibleTodos(state)
})

const mapDispatchToProps = { toggleTodo }
```

Primeiro, importamos `createSelector` do RTK, e definimos algumas funções selectors de uma linha que pegam os campos `todos` e `visibilityFilter` de seu argumento `state`.

Em seguida, chamamos `createSelector` e passamos essas duas pequenas funções de seletor no array "input selector". `createSelector` irá chamá-los, pegar os valores de retorno e passá-los para o "output selector" que definimos, que pode então fazer a filtragem e retornar o resultado final.

Há algumas pequenas mudanças em como isso é definido e usado. Embora você possa dar às funções selectors qualquer nome que desejar, `selectX` é uma convenção de nomenclatura mais comum do que `getX`. Além disso, como os input selectors se encarregam de ler os valores necessários, podemos apenas chamar `selectVisibleTodos(state)`, com `state` como o único argumento.

Se executarmos novamente o aplicativo, a lógica de filtragem _deve_ funcionar exatamente da mesma maneira que antes, pelo que você pode ver na IU.

## Cleanup

Esse é o fim do trabalho de conversão. Agora temos vários arquivos de action e reducers que não estão mais sendo usados, portanto, devemos excluí-los para limpar o projeto.

Podemos remover com segurança `actions/index.js`, `reducers/todos.js`, `reducers/visibilityFilter.js` e os arquivos de teste associados.

Também podemos tentar mudar completamente da estrutura "pasta por tipo" para uma estrutura de "pasta de recursos", movendo todos os arquivos de componentes para as pastas de recursos correspondentes.

> - [Remover arquivos de actino e reducers não utilizados](https://github.com/reduxjs/rtk-convert-todos-example/commit/fbc0b965949e082748b8613b734612226ffe9e94)
> - [Consolidar componentes em pastas de recursos](https://github.com/reduxjs/rtk-convert-todos-example/commit/138cc162b1cc9c64ab67fae0a1171d07940414e6)

Se fizermos isso, a estrutura do código-fonte final ficará assim:

- `/src`
  - `/components`
    - `App.js`
  - `/features`
    - `/filters`
      - `FilterLink.js`
      - `filtersSlice.js`
      - `Footer.js`
      - `Link.js`
    - `/todos`
      - `AddTodo.js`
      - `Todo.js`
      - `TodoList.js`
      - `todosSlice.js`
      - `todosSlice.spec.js`
      - `VisibleTodoList.js`
  - `/reducers`
    - `index.js`
  - `index.js`

Todos têm preferências diferentes sobre o que torna uma estrutura de pastas "sustentável", mas no geral esse resultado parece bastante consistente e fácil de seguir.

Agora, vamos ver a versão final do código em ação!

<iframe src="https://codesandbox.io/embed/rtk-convert-todos-example-uqqy3?fontsize=14&hidenavigation=1&module=%2Fsrc%2Ffeatures%2Ftodos%2FtodosSlice.js&theme=dark&view=editor"
     style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
     title="rtk-convert-todos-example"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

## Resumo

Neste tutorial, você viu:

- Como usar RTK em um aplicativo React típico, incluindo adicionar o pacote, gravar arquivos "slice" e despachar actions de componentes React
- Como usar reducers "mutáveis", preparar payload de actions e escrever funções seletors
- Algumas técnicas para simplificar o código React-Redux, como usar a forma "abreviação de objeto" de `mapDispatch`
- Exemplos de como usar uma estrutura de "pasta de recursos" para organizar seu código.

Esperamos isso ajudou a ilustrar como realmente usar esses métodos na prática.

A seguir, o [Tutorial avançado](./advanced-tutorial.md) examina como usar RTK em um aplicativo que busca dados assíncronos e usa TypeScript.
