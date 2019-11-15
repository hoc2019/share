import React, { Component } from 'react';
import { ThemeContext } from './theme-context'

const Content = (props) => (
    <div>
        <h2 style={{...props.theme}}>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</h2>
    </div>
)

class Main extends Component {
    constructor () {
        super()
        this.state = {}
    }
    render () {
        console.log(this.context)
        return (
            <div>
                <h2 style={{...this.context}}>This is main</h2>
                <Content theme={this.context} />
            </div>
        )
    }
}
Main.contextType = ThemeContext
export default Main