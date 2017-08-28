import { Component } from 'react'
import L from 'leaflet'
import PT from 'prop-types'
import { withIndraConnect } from 'indra'

class TileLayer extends Component {
  static propTypes = {
    indraStore: PT.object,
    tileUrl: PT.string
  }

  componentDidMount () {
    const { indraStore, tileUrl } = this.props
    this.tileLayer = L.tileLayer(tileUrl, {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(indraStore.getIndraStore().map)
  }

  componentWillUnmount () {
    this.tileLayer.remove()
  }

  render () {
    return null
  }
}

export default withIndraConnect(TileLayer)
