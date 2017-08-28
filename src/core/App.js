import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import Layout from './layout'
import actionSpreader from '../utils/actionspreader'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  }

  componentDidMount () {
    // Init Actions
    this.props.store.dispatch(actionSpreader('STARTING'))
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
