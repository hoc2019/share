import React, { Component } from 'react'
import themeContext from './themeContext'

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    class Connect extends Component {

        state = {
            allProps: {}
        }

        componentDidMount () {
          const { store } = this.context
          this._updateProps();
          store.subscribe(() => this._updateProps())
        }
      
        _updateProps () {
          const { store } = this.context
          const stateProps = mapStateToProps ? mapStateToProps(store.getState()) : {};
          const disPatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {};

          this.setState({ 
              allProps: {
                  ...this.props,
                  ...stateProps,
                  ...disPatchProps
              }
           })
        }
        render () {
            const { allProps } = this.state;
            return <WrappedComponent {...allProps} />
        }
    }

    Connect.contextType = themeContext;
    return Connect;
}

export class Provider extends Component {
    render () {
        return (
            <themeContext.Provider value={{store: this.props.store}}>
                {this.props.children}
            </themeContext.Provider>
        )
    }
}

Provider.contextType = themeContext