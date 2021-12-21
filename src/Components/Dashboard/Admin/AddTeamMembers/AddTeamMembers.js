import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddTeamMembers.css';

const AddTeamMembers = () => {


 /* useForm state declare */
 const { register, handleSubmit, reset } = useForm();

 /* onSubmit handle declare */
 const onSubmit = data => {
    

     axios.post('http://localhost:5000/teams', data )
     .then(res => {
        
         if(res.data.insertedId) {
             alert('added successfully');
             reset();
             
         }
         console.log(data.picture);
         
     })
 }


    return (
        <div style={{ margin: '60px'}} className="add-Team-member">
      
        <h1 >Please Add A Team Member</h1>
      
      {/* add Product form */}
        <form onSubmit={handleSubmit(onSubmit)}>
                
            <input type='text' {...register("picture", { required: true })} placeholder='Team Member Image Link'/>
            <input {...register("name", { required: true, maxLength: 40 })} placeholder="Member Name" />
            <input {...register("title", { required: true })} placeholder="Member Title" />
            <input type="email" {...register("email", { required: true })} placeholder="Enter Email"/>                    
            <input type="number" {...register("phone", { required: true })} placeholder="Enter Mobile Number"/>                    
            <input className="submit-button" type="submit" />
        </form>

  </div>
    );
};

export default AddTeamMembers;