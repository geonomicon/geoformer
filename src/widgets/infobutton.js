import React from 'react'
import PT from 'prop-types'

const InfoButton = ({ textVis, toggleInfo }) => <div className='info-panel'>
  {textVis &&
    <div className='info-text'>
      <span className='head-text'>Geoformer</span>
      <span className='body-text'>Analyse, View Geojson</span>
    </div>}
  <button className='info-button' onClick={e => toggleInfo()}>
    In
  </button>
</div>

InfoButton.propTypes = {
  toggleInfo: PT.func,
  textVis: PT.bool
}

export default InfoButton
