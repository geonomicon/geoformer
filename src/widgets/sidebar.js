import React, { Component } from 'react'
import PT from 'prop-types'
import AceEditor from 'react-ace'
import brace from 'brace' //eslint-disable-line

import 'brace/mode/javascript'
import 'brace/theme/monokai'

class Sidebar extends Component {
  render () {
    return <div className='code-container'>
      <div className='editor-intro'>Type Geojson Here to view on Map</div>
      <AceEditor
        mode='javascript'
        theme='monokai'
        width='100%'
        height='520px'
        onChange={this.props.changeEmitter}
        name='UNIQUE_ID_OF_DIV'
        value={this.props.value}
        className='sidebar'
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          autoScrollEditorIntoView: true,
          hScrollBarAlwaysVisible:true,
        }}
      />
    </div>
  }
}

Sidebar.propTypes = {
  value: PT.string,
  changeEmitter: PT.func
}

export default Sidebar
