import React, { useState } from 'react';
import './index.css';
const Contact=()=>{
  const [data,setdata]=useState({
    fname:'',
    lname:'',
    email:'',
    phone:'',
    message:''
  });
  const inputevent=(event)=>{
    const {name,value}=event.target;
    setdata((preval)=>{
      return{
        ...preval,
        [name]:value,
      }
    })
  }
  const formsubmit=(e)=>{
        e.preventDefault();
        (data.fname&&data.lname&&data.email&&data.phone&&data.message)?alert(`my name is ${data.fname} ${data.lname}. 
        My email is ${data.email}. 
        My Phone is ${data.phone}. My message is '${data.message}'`):alert("Each field required...!");
        setdata({
          fname:'',
          lname:'',
          email:'',
          phone:'',
          message:''
        });
  }
  return(
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact-div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
          <form onSubmit={formsubmit}>
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">First Name</label>
              <input 
              type="text" 
              class="form-control" 
              id="exampleFormControlInput1" 
              name="fname"
              value={data.fname}
              onChange={inputevent}
              placeholder="Enter your first name.com"/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Last Name</label>
              <input 
              type="text" 
              class="form-control" 
              id="exampleFormControlInput1"
              name="lname"
              value={data.lname}
              onChange={inputevent}
               placeholder="Enter your last name"/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input 
              type="email" 
              class="form-control" 
              id="exampleFormControlInput1" 
              name="email"
              value={data.email}
              onChange={inputevent}
              placeholder="name@example.com"/>
            </div>
          <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Phone</label>
              <input 
              type="text" 
              class="form-control" 
              id="exampleFormControlInput1" 
              name="phone"
              value={data.phone}
              onChange={inputevent}
              placeholder="Enter your phone number"/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea 
              class="form-control" 
              id="exampleFormControlTextarea1" 
              name="message"
              value={data.message}
              onChange={inputevent}
              rows="3"></textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-outline-primary" type="submit">Submit form</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact;