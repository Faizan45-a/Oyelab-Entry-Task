const Editdata = ({editFormdata,handleEditFormchange,handlecancelbtn}) => {
    return (
        
 <tr>
  <td>
   <input type="text"  value={editFormdata.cockname} name="cockname" placeholder="write cockname" required="required" onChange={handleEditFormchange}/>

  </td>
 <td> 
     <input type="text" value={editFormdata.drink}  name="drink" placeholder="write drink" required="required" onChange={handleEditFormchange}/>
  </td>
     <td> 
         <input type="text"  value={editFormdata.points} name="points" placeholder="write points" required="required" onChange={handleEditFormchange}/>
         </td>
        <button type="submit">Save</button>
        <button onClick={handlecancelbtn}>Cancel</button>
            </tr>
            
    
    )
}

export default Editdata
