import React from 'react'
import PropTypes from 'prop-types'
import LeafletMap from '../components/leafletmap'
import TileLayer from '../mapcomponents/tilelayer'

const Home = ({ showNotifier, onBoundsChange, bounds }) =>
  <LeafletMap onBoundsChange={(bounds) => onBoundsChange(bounds)} bounds={bounds}>
    <TileLayer tileUrl='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png' />
  </LeafletMap>

Home.propTypes = {
  showNotifier: PropTypes.func,
  onBoundsChange: PropTypes.func,
  bounds: PropTypes.object
}

export default Home
