import React, { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';

function App() {
  
  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];

const [search, setSearch]  = useState(list)

const handleSearch = (event) => {

  if (event.target.value === "") {
  setSearch(list);
  return }

  const filtered = list.filter((item) =>
  item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1)
  setSearch(filtered)

  }

  return (
    <div className="main">
      <div>
      <input  type="text" placeholder="Search here" onChange={handleSearch}/>
    </div>
{search && search.map((item, index) => (<div key={index}>{item}</div>
))}
    </div>
  )
}

export default App;
