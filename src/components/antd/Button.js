import React, {Component} from 'react'
import { shouldComponentUpdate } from 'react-immutable-render-mixin'
import {DatePicker } from 'antd'
import 'antd/dist/antd.css'

/*import {Button} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'*/

class AntdButton extends Component {
  constructor (props) {
      super(props)
      this.shouldComponentUpdate = shouldComponentUpdate.bind(this)
  }

  render () {

    return (
      <div className="content">
        <DatePicker />
        {/*<Button>按钮</Button>*/}
      </div>
    )
  }
}

export default AntdButton
