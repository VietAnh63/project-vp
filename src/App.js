import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import store from './redux-setup/Store'
import {provider, Provider} from 'react-redux'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Main />
        <Footer />
      </Provider>
    );
  }
}

export default App;
