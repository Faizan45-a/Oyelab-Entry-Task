import logo from './logo.svg';
import React, {Fragment, useState} from 'react'
import './App.css';
import {elements} from './data'
import {nanoid} from 'nanoid'
import Entry from './Components/Entry';
import Editdata from './Components/Editdata';

function App() {
  const [data, setData] = useState(elements)
  const[addform, setAddform]=useState({
    cockname:'',
    drink:'',
    points:'',
  })
  const[editFormdata,setEditFormdata]=useState({
    cockname:'',
    drink:'',
    points:'',
  })

  const[editentryid, setEditentryid]=useState(null)

  const handlesubmit=(event)=>{
    event.preventDefault();

    const letget=event.target.getAttribute("name")
    const changevalue=event.target.value;
    const newdataform={...addform}
    newdataform[letget]=changevalue

    setAddform(newdataform);
  }

  const handleEditFormchange=(event)=>{
    event.preventDefault()

    const fieldName=event.target.getAttribute("name")
    const fieldvalue=event.target.value
    const newFormdata={...editFormdata}
    newFormdata[fieldName]=fieldvalue
    setEditFormdata(newFormdata)

  }

  const handleForm = (event)=>{
    event.preventDefault()
    const yourEntry={
      id: nanoid(),
    cockname:addform.cockname,
    drink:addform.drink,
    points:addform.points,
      
    }

    const newEntry=[...data,yourEntry]
    setData(newEntry)

  }

  const handleEditFormSubmit=(event)=>{
    event.preventDefault()
    const editeddata={
      id:editentryid,
      cockname:editFormdata.cockname,
      drink:editFormdata.drink,
      points:editFormdata.points
    }
    const newnumbers=[...data]
    const index=data.findIndex((lash)=>
      lash.id===editentryid

    )
    newnumbers[index]=editeddata;

    setData(newnumbers)
    setEditentryid(null)
  }

  const handleEditbutton=(event,lash)=>{
    event.preventDefault()
    setEditentryid(lash.id)
    const formValues={

      cockname:lash.cockname,
    drink:lash.drink,
    points:lash.points,

    }
    setEditFormdata(formValues)
  }

  const handlecancelbtn=()=>{
    setEditentryid(null)
  }

  const handleDeletebtn=(entryid)=>{
    const newvalues=[...data]

    const index=data.findIndex((lash)=>lash.id===entryid)

    newvalues.splice(index,1)
    setData(newvalues)

    
  }


  return (
    
  <>
  
      <div className="parent">
        <h1>Add Entry</h1>
        <form onSubmit={handleForm}>
        <input type="text" name="cockname" placeholder="name" onChange={handlesubmit}/>
        <input type="text" name="drink" placeholder="Which cocktail"onChange={handlesubmit}/>
        <input type="number" name="points" placeholder="Give-points" onChange={handlesubmit}/>
        <button type="submit" >Submit</button>
        </form>
        <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
        <tr>
          <th>cockname</th>
          <th>drink</th>
          <th>points</th>
          <th>Actions</th>
        </tr>

      </thead>
  
        <tbody>
          {data.map((lash)=>{
  
        return  <Fragment>
{editentryid===lash.id ? <Editdata handlecancelbtn={handlecancelbtn} editFormdata={editFormdata} handleEditFormchange={handleEditFormchange}/> :   <Entry handleDeletebtn={handleDeletebtn} lash={lash} handleEditClick={handleEditbutton}/>}

          
            </Fragment>
})}
        </tbody>
  

    </table>
    </form>

  </div>
  

  </>
  );
}

export default App;
