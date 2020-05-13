import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import store from './redux-setup/Store'
import RouterURL from './components/RouterURL'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import {createBrowserHistory} from "history"
export const appHistory = createBrowserHistory()
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (

        <Provider store={store}>
          <Router>
          <Header />
          <RouterURL/>
          <Footer />
          </Router>
        </Provider>


    );
  }
}

export default App;
