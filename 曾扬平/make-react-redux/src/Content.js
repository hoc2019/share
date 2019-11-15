import React, { Component } from 'react'
import Button from './Button'
import { connect } from './react-redux'

class Content extends Component {

  render () {
    const { theme } = this.props
    return (
      <div>
        <p style={{...theme}}>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
        <Button />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme
  }
}

Content = connect(mapStateToProps)(Content)

export default Content