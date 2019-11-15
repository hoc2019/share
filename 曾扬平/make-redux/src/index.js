import createStore from './store'

let appState = {
  title: {
    text: '标题标题标题标题标题',
    color: 'red',
  },
  content: {
    text: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
    color: 'red'
  }
}

function reducer (state, action) {
  if(!state){
    return {
      title: {
        text: '标题标题标题标题标题',
        color: 'red',
      },
      content: {
        text: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        color: 'red'
      }
    }
  }
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default: return state
  }
}

function renderApp (state, oldState={}) {
  if(state === oldState) return;
  renderTitle(state.title, oldState.title)
  renderContent(state.content, oldState.content)
}

function renderTitle (title, oldTitle) {
  if(title === oldTitle) return;
  console.log('renderTitle')
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = title.text
  titleDOM.style.color = title.color
}

function renderContent (content, oldContent) {
  if(content === oldContent) return;
  console.log('renderContent')
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = content.text
  contentDOM.style.color = content.color
}
const store = createStore(reducer)
const oldState = store.getState()
renderApp(store.getState())
store.subscribe(() => {
  const newState = store.getState()
  renderApp(newState, oldState)
})

store.dispatch({type: 'UPDATE_TITLE_TEXT', text: '新标题'})
store.dispatch({type: 'UPDATE_TITLE_COLOR', color: 'blue'})


