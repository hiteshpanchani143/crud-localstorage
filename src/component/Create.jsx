import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Create = () => {

    const [firstname, setfirstname] = useState();
    const [lastname, setlastname] = useState();
    const [city, setcity] = useState();
    const [mobile, setmobile] = useState();

const navigate = useNavigate()

const handleSubmit =async(e)=>{
    e.preventDefault()
    const data ={
        firstname,lastname,city,mobile
    }
    await axios.post('https://63be7854f5cfc0949b5819ef.mockapi.io/apiWithImage',data)
    navigate('/view')
}

  return (
    <>
    <div className='d-flex justify-content-between m-3'>
    <h2 className='mx-5'>Create</h2>
    <NavLink to='/view'><button className='btn btn-primary'>View Data</button></NavLink>
    </div>

       <form onSubmit={handleSubmit} >
  <div className="">
    <label htmlFor="exampleInputEmail1" className="form-label">FirstName</label>
    <input type="text"
    value={firstname}
    onChange={(e)=>setfirstname(e.target.value)}
    className="form-control"/>
  </div>

  <div className="">
    <label htmlFor="exampleInputPassword1" className="form-label">LastName</label>
    <input type="text"
    value={lastname}
    onChange={(e)=>setlastname(e.target.value)}
     className="form-control" />
  </div>

  <div className="">
    <label htmlFor="exampleInputPassword1" className="form-label">City</label>
    <input type="text"
    value={city}
    onChange={(e)=>setcity(e.target.value)}
     className="form-control" />
  </div>

  <div className="mb-2">
    <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
    <input type="text"
    value={mobile}
    onChange={(e)=>setmobile(e.target.value)}
     className="form-control" />
  </div>

  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div> */}

  <button type="submit" 
  
  className="btn btn-primary">Submit</button>
</form>
    </>
  );
}

export default Create;
