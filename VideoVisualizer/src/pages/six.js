import React, {useState, useEffect} from 'react';
import {Dropdown, DropdownButton} from 'react-bootstrap';

function Six() {

  const [selectedMonth, setSelectedMonth] = useState('');
  const [results, setResults] = useState([{val: "example"}, {val: "tag2"}]);
  
  async function post(dateChosen) {
  const response = await fetch("https://10.192.38.59:5000/query", {
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({query: 'SELECT t.Name FROM Describes d JOIN Videos v ON (d.VideoID = v.VideoID) JOIN Tags t ON (d.TagsID = t.TagsID) WHERE MONTH(v.PublishDate) = '.concat(dateChosen, ' GROUP BY d.TagsID, t.Name ORDER BY COUNT(v.VideoID) DESC LIMIT 15')})
  });
    const resultVals = await response.json();
    setResults(resultVals.msg);
}

  const handleSelect = (eventKey) => {
    setSelectedMonth(eventKey);
      post(selectedMonth);
};

  
  
    return (
      <div>
        <DropdownButton id="dropdown-basic-button" title="Select Month" onSelect={handleSelect}>
    <Dropdown.Item eventKey="1">January</Dropdown.Item>
    <Dropdown.Item eventKey="2">February</Dropdown.Item>
    <Dropdown.Item eventKey="3">March</Dropdown.Item>
    <Dropdown.Item eventKey="4">April</Dropdown.Item>
    <Dropdown.Item eventKey="5">May</Dropdown.Item>
    <Dropdown.Item eventKey="6">June</Dropdown.Item>
    <Dropdown.Item eventKey="7">July</Dropdown.Item>
    <Dropdown.Item eventKey="8">August</Dropdown.Item>
    <Dropdown.Item eventKey="9">September</Dropdown.Item>
    <Dropdown.Item eventKey="10">October</Dropdown.Item>
    <Dropdown.Item eventKey="11">November</Dropdown.Item>
    <Dropdown.Item eventKey="12">December</Dropdown.Item>
    
  </DropdownButton>
        
        (<div><ul>
{results.map((tag) => (<li>{tag.val}</li>))}</ul></div>)
      </div>
    ); 
}

export default Six;
