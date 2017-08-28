import React from 'react'
import PropTypes from 'prop-types'
import LeafletMap from '../components/leafletmap'
import TileLayer from '../layers/tilelayer'
import BoundTracker from '../layers/boundtracker'
import GeojsonLayer from '../layers/geojsonlayer'
import Sidebar from '../widgets/sidebar'
import InfoButton from '../widgets/infobutton'

const Home = ({ showNotifier, onBoundsChange, bounds, onCodeChange, geojson,
   toggleInfo, infoVis, codeVis, toggleCode }) =>
     <div className='app' style={{ height: '100%' }}>
       <Sidebar value={geojson} changeEmitter={_ => onCodeChange(_)} onClick={_ => toggleCode()} codeVis={codeVis} />
       <InfoButton textVis={infoVis} toggleInfo={e => toggleInfo()} />
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
  bounds: PropTypes.object,
  toggleInfo: PropTypes.func,
  infoVis: PropTypes.bool,
  codeVis: PropTypes.bool,
  toggleCode:PropTypes.func
}

export default Home
