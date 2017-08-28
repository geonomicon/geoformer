import { Component } from 'react'
import L from 'leaflet'
import PT from 'prop-types'
import { withIndraConnect } from 'indra'

class GeojsonLayer extends Component {
  static propTypes = {
    indraStore: PT.object,
    geojson: PT.string,
    changeBounds: PT.func
  }

  componentDidMount () {
    const { indraStore, geojson } = this.props
    const { map } = indraStore.getIndraStore()
    try {
      this.geojsonLayer = L.geoJSON(JSON.parse(geojson)).addTo(map)
      this.props.changeBounds(this.geojsonLayer.getBounds())
    } catch (e) {
      console.log('Unable to draw')
    }
  }

  shouldComponentUpdate (nextprops) {
    return !!nextprops.geojson && JSON.stringify(nextprops.geojson) !== JSON.stringify(this.props.geojson)
  }

  componentWillUnmount () {
    this.geojsonLayer && this.geojsonLayer.remove()
  }

  componentWillUpdate (nextprops) {
    const { indraStore, geojson } = nextprops
    const { map } = indraStore.getIndraStore()
    this.geojsonLayer && this.geojsonLayer.remove()
    this.geojson = null
    try {
      this.geojsonLayer = L.geoJSON(JSON.parse(geojson)).addTo(map)
      this.props.changeBounds(this.geojsonLayer.getBounds())
    } catch (e) {
      console.log('Unable to draw')
    }
  }

  render () {
    return null
  }
}

export default withIndraConnect(GeojsonLayer)
