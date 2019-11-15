import React, { Component } from 'react'
import HOC1 from './HOC1'
import HOC2 from './HOC2'

class Index extends Component {
    render () {
        return <div>hi {this.props.data}</div>
    }
}

Index = HOC1(Index, 'HOC')
Index = HOC2(Index, 'r u ok?')
export default Index