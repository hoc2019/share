import React, { Component } from 'react'

export default (WrappedComponent, name) => {
    class HOC1 extends Component {
        constructor () {
            super();
            this.state = {
                data: null
            }
        }

        componentWillMount () {
            this.setState({
                data: name + ' ' + this.props.data
            })
        }

        render () {
            return <WrappedComponent data={this.state.data} />
        }
    }
    return HOC1;
}