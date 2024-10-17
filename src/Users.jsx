import { useEffect, useState } from "react"
import User from "./User"

export default function Users(){
const [users,setUser]= useState([])
const [count,setCount]= useState(2)
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data.splice(0,count)))
},[])
function add(){
    const add = count +1
setCount(add)
  }
  function remove(){
    const remove = count -1
    setCount(remove)
  }
return(
<div>
    <h1>Total User: {users.length}</h1>
    {
    users.map(user=><User data={user}></User>)
}
<button className="m" onClick={add}>Load One By One</button> 
<button className="m" onClick={remove}>Remove One By One</button> 
</div> 


)


}