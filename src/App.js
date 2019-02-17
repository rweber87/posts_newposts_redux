import React, { Component } from 'react';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer, 
  initialState, 
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
              <div className="App">
                <PostForm/>
                <hr/>
                <Posts/>
              </div>
            </Provider>
        );
    }
};

export default App;