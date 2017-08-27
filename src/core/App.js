import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import Layout from './layout'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <Layout />
      </Provider>
    )
  }
}

export default App
