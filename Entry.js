import React from 'react'

const Entry = ({lash,handleEditClick,handleDeletebtn}) => {
    return (
   
<tr>
  <td>{lash.cockname}</td>
  <td>{lash.drink}</td>
  <td>{lash.points}</td>
  <td>
      <button type="button" onClick={(event)=>handleEditClick(event,lash)}>Edit</button>
      <button  type="button" onClick={()=>handleDeletebtn(lash.id)}>Delete</button>
  </td>
</tr>

    )
}

export default Entry
