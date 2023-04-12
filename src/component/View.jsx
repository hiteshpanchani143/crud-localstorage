import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink} from 'react-router-dom';

const View = () => {

    const [getdataapi, setgetdataapi] = useState([]);
    const [tabledark,settabledark] = useState('')

    

const showdata =async()=>{
try {
 const res =  await axios.get('https://63be7854f5cfc0949b5819ef.mockapi.io/apiWithImage')
 setgetdataapi(res.data)
//  console.log(res.data);
    
} catch (error) {
    console.log(error);
}
}

const handleDelete = async(id)=>{
     try {
        await axios.delete(`https://63be7854f5cfc0949b5819ef.mockapi.io/apiWithImage/${id}`)
        showdata();
     } catch (error) {
        console.log(error);
     }
}

// send data to localStorage

const sendLocalStorage =(id,firstname,lastname,city,mobile)=>{
    localStorage.setItem('id',id)
    localStorage.setItem('firstname',firstname)
    localStorage.setItem('lastname',lastname)
    localStorage.setItem('city',city)
    localStorage.setItem('mobile',mobile)
}
useEffect(() => {
  showdata()
}, []);
  return (
    <>
    <div className='form-check form-switch'>
        <input className='form-check-input'
         type='checkbox'
        onClick={()=>{
            if(tabledark === 'table-dark') settabledark('')
            else settabledark('table-dark')
        }}
         />
    </div>
    <div className='container'>
  <div className='d-flex justify-content-between m-3'>
    <h2 className='mx-5'>View Data</h2>
    <NavLink to='/'><button className='btn btn-secondary'>Create Date</button></NavLink>
    </div>
    <table className= {`table caption-top table-bordered ${tabledark}`}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">City</th>
      <th scope="col">Mobile</th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  {
    getdataapi.map((item,index) =>(
        <tbody key={index}>
    <tr>
      <th scope="row">{item.id}</th>
      <td>{item.firstname}</td>
      <td>{item.lastname}</td>
      <td>{item.city}</td>
      <td>{item.mobile}</td>
      <td>
      <NavLink to={`/update/${item.id}`}>
            <button className='btn-success' onClick={()=>sendLocalStorage(
                item.id,item.firstname,item.lastname,item.city,item.mobile
            )}>Edit</button>
     </NavLink>
      </td>
      <td><button 
      className='btn-danger'
      onClick={()=>handleDelete(item.id)}
      >Delete</button></td>
    </tr>
  </tbody>
    ))
  }
</table>
    </div>
    </>
  );
}

export default View;
