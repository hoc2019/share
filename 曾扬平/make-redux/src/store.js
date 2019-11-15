const createStore = (reducer) => {
    let state = null;
    const listeners = []
    const getState = () => state;
    const subscribe = (listener) => listeners.push(listener)
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    dispatch({})
    return {getState, dispatch, subscribe}
}

export default createStore;