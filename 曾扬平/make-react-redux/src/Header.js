import React, { Component } from 'react'
import { connect } from './react-redux'

class Header extends Component {
  
  render () {
    console.log(this.props)
    const { theme } = this.props
    return (
      <h1 style={{...theme}}>标题标题标题标题标题</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme
  }
}

Header = connect(mapStateToProps)(Header)

export default Header