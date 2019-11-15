import React, { Component } from 'react'

export default (WrappedComponent, question) => {
    class HOC2 extends Component {
        constructor () {
            super();
            this.state = {
                data: null
            }
        }

        componentWillMount () {
            this.setState({
                data: question
            })
        }

        render () {
            return <WrappedComponent data={this.state.data} />
        }
    }
    return HOC2;
}