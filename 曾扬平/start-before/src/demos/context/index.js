import React, { Component } from 'react'
import Header from './Header';
import Main from './Main';
import { ThemeContext, themes } from './theme-context'
console.log(ThemeContext)

class Index extends Component {
    constructor () {
        super()
        this.state = {
            theme: 'dark'
        }
    }
    onToggleTheme = () => {
        const { theme } = this.state;
        const nextTheme = theme === 'dark' ? 'light' : 'dark'
        this.setState({
            theme: nextTheme
        })
    }
    render () {
        return (
            <ThemeContext.Provider value={themes[this.state.theme]}>
                <Header />
                <Main />
                <button onClick={this.onToggleTheme}>切换主题</button>    
            </ThemeContext.Provider>
        )
    }
} 
export default Index