import './user.css'

export function UserDetails(props){
  return (
  <div>
  <h1 className="user"> Name: {props.name} </h1>
  <h2 > Address: {props.add} </h2>

  </div>
  )
}