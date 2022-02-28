import React from 'react';
import { Button, Input } from '@mui/material';

const AddBannarImages = () => {
    return (
        <div>
           <h3>Add Banner Images</h3>
            {/* <form onSubmit={handleSubmit}> */}
            <form>
              
                <Input
                    accept="image/*"
                    type="file"
                    // onChange={e => setImage(e.target.files[0])}
                    sx={{p: '5px'}}
                />
                <br /> 
                <Button  sx={{mt: '5px'}} variant="contained" color="success" type="submit">
                    Add Banner
                </Button>
            </form>
            {/* {success && <p style={{ color: 'green' }}>{success}</p>} */}
        </div>
    );
};

export default AddBannarImages;