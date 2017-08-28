import React from 'react'
import { IndexLink, Link } from 'react-router' // eslint-disable-line
import PropTypes from 'prop-types'
import Notifier from '../connectors/notifier'
import MainComponent from '../map/container'

export const CoreLayout = ({ children }) => (
  <div>
    <Notifier />
    <MainComponent />
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.node,
}

export default CoreLayout
