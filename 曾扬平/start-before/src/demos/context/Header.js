import React, { Component } from 'react';
import { ThemeContext } from './theme-context'

export default class Header extends Component {
    render () {
        return (
            <ThemeContext.Consumer>
                {context => (
                    <div>
                        <h2 style={{backgroundColor: context.backgroundColor, color: context.color}}>This is header</h2>
                        <Title theme={context} />
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}

const  Title = (props) => (<h1 style={{...props.theme}}>标题标题标题标题标题标题</h1>)