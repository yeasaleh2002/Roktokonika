import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './RoktokonikaSupportHumanityTeamRegistration.css';

const RoktokonikaSupportHumanityTeamRegistration = () => {


 /* useForm state declare */
 const { register, handleSubmit, reset } = useForm();

 /* onSubmit handle declare */
 const onSubmit = data => {
     console.log(data);
     axios.post('http://localhost:5000/roktokonikaSupport', data )
     .then(res => {
         if(res.data.insertedId) {
             alert('added successfully');
             reset();
         }
     })
 }



    return (
        <div style={{ margin: '60px'}} className="add-Team-member">
      
        <h1 >Please Register For Support Humanity Team!!</h1>
      
     
        <form onSubmit={handleSubmit(onSubmit)}>
           <b style={{fontSize: '17px', paddingBottom:"5px", color:'red'}}> Your Photo :</b>  <input type='text' {...register("picture", { required: true })} placeholder='Support Team Image Link'/>
           <b style={{fontSize: '17px', paddingBottom:"5px", color:'red'}}> Name :</b> <input {...register("name", { required: true, maxLength: 40 })} placeholder="Enter Your Name" />
           <b style={{fontSize: '17px', paddingBottom:"5px", color:'red'}}> Email :</b>  <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email"/>                    
           <b style={{fontSize: '17px', paddingBottom:"5px", color:'red'}}> Phone Number :</b>  <input type="number" {...register("phone", { required: true })} placeholder="Enter Your Mobile Number"/>                    
           <b style={{fontSize: '17px', paddingBottom:"5px", color:'red'}}> Address :</b>  <input {...register("address", { required: true })} placeholder="Address" />
           <b style={{fontSize: '17px', paddingBottom:"5px", color:'red'}}> Gender :</b>  <select {...register("gender", { required: true })} placeholder='Select Your Blood Gender'>        
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
            </select>
            <b style={{fontSize: '17px', paddingBottom:"5px", color:'red'}}> Age :</b>  <input type="number" {...register("age", { required: true })} placeholder="Your Ages"/>                    

            <b style={{fontSize: '17px', paddingBottom:"5px", color:'red'}}> Blood Group :</b>  <select {...register("bloodGroup", { required: true })} >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>                
            </select>

            <b style={{fontSize: '17px', paddingBottom:"5px", color:'red'}}> What you will do with the support humanitarian team?</b>  <select {...register("support", { required: true })} >
                <option value="Yes">YES</option>
                <option value="No">NO</option>              
            </select>

            
            <input className="submit-button" type="submit" />
        </form>

  </div>
    );
};

export default RoktokonikaSupportHumanityTeamRegistration;