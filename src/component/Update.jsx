
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const Update = () => {

    const [id, setid] = useState(0);
    const [firstname, setfirstname] = useState();
    const [lastname, setlastname] = useState();
    const [city, setcity] = useState();
    const [mobile, setmobile] = useState();


    const navigate = useNavigate()

const handleUpdate =async(e)=>{
    e.preventDefault()
    try {
        let newData={
            firstname,lastname,city,mobile
        }
    
        await axios.put(`https://63be7854f5cfc0949b5819ef.mockapi.io/apiWithImage/${id}`,newData)
        .then(()=>{
            navigate('/view')
        })
        
    } catch (error) {
        console.log(error);
    }

}

useEffect(() => {
    setid(localStorage.getItem('id'))
    setfirstname(localStorage.getItem('firstname'))
    setlastname(localStorage.getItem('lastname'))
    setcity(localStorage.getItem('city'))
    setmobile(localStorage.getItem('mobile'))
}, []);

  return (
    <>
    <h2>Update</h2>
       <form onSubmit={handleUpdate}  >
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

  <div className='d-flex justify-content-between'>
  <button type="submit" 
  className="btn btn-primary">Update</button>

  <NavLink to='/view'><button className="btn btn-secondary ">Back</button></NavLink>
  </div>
  
</form>
    </>
  );
}

export default Update;
