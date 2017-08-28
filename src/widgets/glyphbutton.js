import React from 'react'
import PT from 'prop-types'

const GlyphButton = ({ onClick }) =>
  <button type='submit' className='glyph-button' onClick={_ => {
    _.preventDefault()
    onClick()
  }}>
    Js
  </button>

GlyphButton.propTypes = {
  onClick: PT.func
}

export default GlyphButton
