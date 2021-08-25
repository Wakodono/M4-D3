import { Component, } from "react"
import { Alert } from 'react-bootstrap'

class WarningSign extends Component {
  render() {
    return <Alert variant = 'danger'>{this.props.text}</Alert>;
  }
}

export default WarningSign