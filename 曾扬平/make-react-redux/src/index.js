import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import './index.css'
import createStore from './store'
import { Provider } from './react-redux'

const themeReducer = (state, action) => {
  if (!state) return {
    theme: {
      color: 'white',
      backgroundColor: 'red'
    }
  }
  switch (action.type) {
    case 'UPDATE_COLOR':
      return { 
        ...state, 
        theme: {
          ...state.theme,
          color: action.color
        }
      }
    case 'UPDATE_BACKGROUND_COLOR':
      return { 
        ...state, 
        theme: {
          ...state.theme,
          backgroundColor: action.backgroundColor
        }
      }
    default: return state
  }
}
const store = createStore(themeReducer)

class Index extends Component {
  render () {
    return (
      <Provider store={ store }>
        <Header />
        <Content />
      </Provider>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)