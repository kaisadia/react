import React, { useState } from 'react'
import './SearchBox.css'


export default function SearchBox(props) {

  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];

const [search, setSearch]  = useState(list)

const handleSearch = (e) => {
  if (props.e.target.value === 0) 
  setSearch(list);
  return
}
  const filtered = list.filter((item) =>
  item.toLowerCase().indexOf(props.e.target.value.toLowerCase()) !== -1)
  setSearch(filtered)


  return (
    <div className="main">
      <div className="search">
      <input 
      onChange={handleSearch}
   type="text"
   placeholder="Search here"/>
   {list}
    </div>
    </div>
  )
}
