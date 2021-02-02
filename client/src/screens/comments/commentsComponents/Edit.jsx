import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const Edit = (props) => {
  
  const [formData, setFormData] = useState({
    content: ''
  })
  const { content } = formData;
  const { campsite, close, handleUpdate, currentComment } = props;

  useEffect(() => {
    const prefillFormData = () => {
      setFormData({
        content: currentComment.content
      })
    }
      prefillFormData()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <form className='form'onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(campsite.id, currentComment.id, formData);
      close()
    }}>
      <TextField
        id="outlined-basic"
        label="Comment"
        variant="outlined"
        type='text'
        name='content'
        value={content}
        onChange={handleChange}
      />      
      <Button variant="contained" id='form-button' type='submit' size='small'>Submit</Button>
    </form>
  );
};

export default Edit;