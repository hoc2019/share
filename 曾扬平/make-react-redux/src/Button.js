import React, { Component } from 'react'
import { connect } from './react-redux'

class Button extends Component {

  render () {
    const { theme } = this.props
    return (
      <div>
        <button style={{...theme}} onClick={() => {this.props.changeColor('red')}}>Red</button>
        <button style={{...theme}} onClick={() => {this.props.changeColor('blue')}}>Blue</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeColor: (backgroundColor) => {
      dispatch({ type: 'UPDATE_BACKGROUND_COLOR', backgroundColor })
    }
  }
}

Button = connect(mapStateToProps, mapDispatchToProps)(Button)

export default Button