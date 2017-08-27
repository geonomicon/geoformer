import React from 'react'
import { IndexLink, Link } from 'react-router' // eslint-disable-line
import PropTypes from 'prop-types'
import Notifier from '../connectors/notifier'
import MainComponent from '../map/container'
import Sidebar from '../widgets/sidebar'

export const CoreLayout = ({ children }) => (
  <div>
    <Notifier />
    <div className='app' style={{ height: '100%' }}>
      <Sidebar />
      <MainComponent />
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.node,
}

export default CoreLayout
