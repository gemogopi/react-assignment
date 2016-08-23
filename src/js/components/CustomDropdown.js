import React from "react"
import ReactDOM from "react-dom"
import styles from '../../index.css'

export default class CustomDropdown extends React.Component {
  
  constructor(){
  	super();
    this.state = {
      selectedItem: null,
      isListVisible: false
    }
  }

  dropdownIconClickHandler(){
    this.toggleListVisibleState(!this.state.isListVisible);
  }
  //TODO: Accessing value from event object is not a good idea. We may need to receive selected <ListComponent>'s item object
  listItemClickHandler(e) {
    const value = e.target.textContent;
    this.setState({
      selectedItem: value
    })
    this.toggleListVisibleState(!this.state.isListVisible);
  }
  //This method will update the state variable with received boolean value
  toggleListVisibleState(flag){
    this.setState({
      isListVisible: flag
    })
  }
  //updating the state with placeholder value
  componentDidMount(){
    this.setState({
      selectedItem : this.props.placeholder
    });
  }

  // CustomDropdown component will work independent of <ListComponent>
  render() {
    const ListComponent = this.props.itemComponent;
    const listItems = this.props.items.map( item => <li onClick={this.listItemClickHandler.bind(this)}><ListComponent  {...item} /></li>)      
    return <div>
      	<div className={styles.customDropdown}>
      		<div className={"btn btn-large " + (styles.customButton)} onClick={this.dropdownIconClickHandler.bind(this)}>
            <span>{this.state.selectedItem}</span> 
            <div className="glyphicon glyphicon-chevron-down pull-right"></div>
          </div>
          <div className={this.state.isListVisible ? styles.listShow : styles.listHide}>
            <ul className={styles.dropdownList}>
               {listItems}
            </ul>
          </div>
      	</div>
    </div>
  }
}