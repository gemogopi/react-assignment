import React from "react"
import ReactDOM from "react-dom"
import styles from '../../index.css'

export default class CustomerItem extends React.Component {
  
  constructor(){
  	super();
  }

  render() {
    return <label>{this.props.first + " " + this.props.last}</label>
  }
}