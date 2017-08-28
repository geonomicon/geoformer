import { Component } from 'react'
import PT from 'prop-types'
import { withIndraConnect } from 'indra'

class BoundTracker extends Component {
  static propTypes = {
    indraStore: PT.object,
    bounds: PT.object,
    onBoundsChange: PT.func
  }

  componentDidMount () {
    const { indraStore, bounds, onBoundsChange } = this.props
    this.map = indraStore.getIndraStore().map
    if (bounds) this.map.fitBounds(bounds)
    this.map.on('moveend', _ => onBoundsChange(this.map.getBounds()))
  }

  shouldComponentUpdate (nextprops) {
    return nextprops.bounds && JSON.stringify(nextprops.bounds) !== JSON.stringify(this.props.bounds)
  }

  componentWillUpdate (nextprops) {
    this.map.fitBounds(nextprops.bounds)
  }

  render () {
    return null
  }
}

export default withIndraConnect(BoundTracker)
