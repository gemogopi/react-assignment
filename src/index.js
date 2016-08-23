import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import CustomDropdown from './js/components/CustomDropdown';
import CustomerItem from './js/components/CustomerItem';

const app = document.getElementById('app');

const customers = [
	{first:"Frank", last: "Peters"},
	{first:"Nicole", last: "Angels"},
	{first:"John", last: "Davis"},
	{first:"Paul", last: "Christopher"}
];

ReactDOM.render(<div>
					<h1>Customizable Dropdown</h1>
					<CustomDropdown 
						placeholder="Choose Customers" 
						itemComponent= {CustomerItem} 
						items={customers} />
				</div>,
				 app);