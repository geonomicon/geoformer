import React, { Component } from 'react'
import { IndraProvider } from 'indra'
import L from 'leaflet'
import indraStore from '../store/indrastore'
import PT from 'prop-types'

class LeafletMap extends Component {
  static propTypes = {
    children: PT.node,
    onBoundsChange: PT.func,
    bounds: PT.object
  }

  state = { map: null }

  componentDidMount () {
    this.map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 8
    })

    if (this.props.bounds) this.map.fitBounds(this.props.bounds)

    this.map.on('movestart', _ => this.props.onBoundsChange(this.map.getBounds()))

    this.setState({
      map: this.map
    })

    indraStore.setIndraStore({ map: this.map })
  }

  componentWillUnmount () {
    this.setState({
      map: null
    })

    indraStore.setIndraStore({ map:null })
  }

  render () {
    return <div id='map' style={{ height: '100vh' }} className='map'>
      <IndraProvider indraStore={indraStore}>
        <div>
          {this.state.map ? this.props.children : null} {/* Add Loader instead of null */}
        </div>
      </IndraProvider>
    </div>
  }
}

export default LeafletMap
