import React from 'react'
import { Link } from 'react-router-dom'
const HealthList = (props) => {
  return (
    <tr>
        <td>
            {props.health.createdAt}
        </td>
        <td>
            {props.health.full_name}
        </td>
        <td>
            {props.health.email}
        </td>
        <td>
            {props.health.temperature}
        </td>
        <td>
            {props.health.phone_number}
        </td>
        <td>
            <button className='btn btn-danger btn-sm text text-black' onClick={() => {props.deleteHealth(props.health._id)}}>Delete</button>
            <Link to={'/edit/'+props.health._id} className='btn btn-sm btn-success'>Edit</Link>
        </td>
    </tr>
  )
}

export default HealthList