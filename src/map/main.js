import React from 'react'
import PropTypes from 'prop-types'
import LeafletMap from '../components/leafletmap'
import TileLayer from '../layers/tilelayer'
import BoundTracker from '../layers/boundtracker'
import GeojsonLayer from '../layers/geojsonlayer'
import Sidebar from '../widgets/sidebar'

const Home = ({ showNotifier, onBoundsChange, bounds, onCodeChange, geojson }) =>
  <div className='app' style={{ height: '100%' }}>
    <Sidebar value={geojson} changeEmitter={_ => onCodeChange(_)} />
    <LeafletMap>
      {geojson && <GeojsonLayer geojson={geojson} changeBounds={bounds => onBoundsChange(bounds)} />}
      <TileLayer tileUrl='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png' />
      <BoundTracker onBoundsChange={(bounds) => onBoundsChange(bounds)} bounds={bounds} />
    </LeafletMap>
  </div>

Home.propTypes = {
  showNotifier: PropTypes.func,
  onBoundsChange: PropTypes.func,
  onCodeChange: PropTypes.func,
  geojson: PropTypes.string,
  bounds: PropTypes.object
}

export default Home
