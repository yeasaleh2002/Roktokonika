import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './RoktokonikaCleanTeamRegistration.css';

const RoktokonikaCleanTeamRegistration = () => {


 /* useForm state declare */
 const { register, handleSubmit, reset } = useForm();

 /* onSubmit handle declare */
 const onSubmit = data => {
     console.log(data);
     axios.post('http://localhost:5000/roktokonikaClean', data )
     .then(res => {
         if(res.data.insertedId) {
             alert('added successfully');
             reset();
         }
     })
 }



    return (
        <div style={{ margin: '60px'}} className="add-Team-member">
      
        <h1 >Please Register For Roktokonika Clean Team!!</h1>
      
      
        <form onSubmit={handleSubmit(onSubmit)}>
           <b style={{fontSize: '17px', paddingBottom:"5px", color:'#3B95F7'}}> Your Photo :</b>  <input type='text' {...register("picture", { required: true })} placeholder='Clean Team Image link'/>
           <b style={{fontSize: '17px', paddingBottom:"5px", color:'#3B95F7'}}> Name :</b> <input {...register("name", { required: true, maxLength: 40 })} placeholder="Enter Your Name" />
           <b style={{fontSize: '17px', paddingBottom:"5px", color:'#3B95F7'}}> Email :</b>  <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email"/>                    
           <b style={{fontSize: '17px', paddingBottom:"5px", color:'#3B95F7'}}> Phone Number :</b>  <input type="number" {...register("phone", { required: true })} placeholder="Enter Your Mobile Number"/>                    
           <b style={{fontSize: '17px', paddingBottom:"5px", color:'#3B95F7'}}> Address :</b>  <input {...register("address", { required: true })} placeholder="Address" />
           <b style={{fontSize: '17px', paddingBottom:"5px", color:'#3B95F7'}}> Gender :</b>  <select {...register("gender", { required: true })} placeholder='Select Your Blood Gender'>        
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
            </select>
            <b style={{fontSize: '17px', paddingBottom:"5px", color:'#3B95F7'}}> Age :</b>  <input type="number" {...register("age", { required: true })} placeholder="Your Ages"/>                    

            <b style={{fontSize: '17px', paddingBottom:"5px", color:'#3B95F7'}}> Blood Group :</b>  <select {...register("bloodGroup", { required: true })} >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>                
            </select>

            <b style={{fontSize: '17px', paddingBottom:"5px", color:'#3B95F7'}}> What you will do with the Roktokonika Clean team?</b>  <select {...register("clean", { required: true })} >
                <option value="YES">YES</option>
                <option value="NO">NO</option>              
            </select>

            
            <input className="submit-button" type="submit" />
        </form>

  </div>
    );
};

export default RoktokonikaCleanTeamRegistration;