 import {useState, useEffect } from 'react'
import CardItem from './CardItem';

 
 export default function FetchData () {
    const [users, setUsers] = useState([]);
  

    const fetchData = () => {
        fetch("https://random-data-api.com/api/users/random_user?size=10")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setUsers(data);
             });
            
      };

    
      useEffect(() => {
        fetchData();
      }, [])



      return (
        <div className='grid'>
            {users.map((users)=> 
          <CardItem users={users} key={users.uid}>
            {users.first_name}{users.last_name}
          </CardItem>)} 
          </div>
      );
    }
