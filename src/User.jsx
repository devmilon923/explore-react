
export default function User({data}){
// console.log(data)
return(
<div className="card">
    <p>Name: {data.name}</p>
    <p>Email: {data.email} </p>
</div>

)


}