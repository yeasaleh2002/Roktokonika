import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './AddPost.css';

const AddPost = () => {

    const {user} = useAuth();

 /* useForm state declare */
 const { register, handleSubmit, reset } = useForm();

 /* onSubmit handle declare */
 const onSubmit = data => {

  /*   const formData = new FormData();
    formData.append('image', data.image[0])
    formData.append('name', data.name)
    formData.append('posts', data.posts)
     
    const url = 'https://boiling-cove-07763.herokuapp.com/posts'
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        if (data.insertedId) {
            alert('added successfully');
            reset();
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
     */
     axios.post('https://boiling-cove-07763.herokuapp.com/posts', data )
     .then(res => {
         if(res.data.insertedId) {
             alert('added successfully');
             reset();
         }
         });
      
 }

    return (
        <div style={{ margin: '60px'}} className="add-Team-member">
      
        <h1 >Please Write Your Post!</h1>
      
      {/* add Product form */}
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register("image", { required: true })} placeholder='Image Link'/>
            <input type='text' {...register("name", { required: true })} defaultValue={user?.displayName} placeholder="Your Name"/>
            <textarea type="textArea" {...register("posts", { required: true, maxLength: 1000 })} placeholder="Write Your Post" />                  
            <input className="submit-button" type="submit" />
        </form>

  </div>
    );
};

export default AddPost;