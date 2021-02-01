import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Edit = (props) => {
  
  const [formData, setFormData] = useState({
    content: ''
  })
  const { content } = formData;
  const { foods, handleUpdate } = props;
  const { id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const foodItem = foods.find((foodItem) => {
        return foodItem.id === Number(id)
      })
      setFormData({
        name: foodItem.name
      })
    }
    if (foods.length) {
      prefillFormData()
    }
  }, [foods])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData);
    }}>
      <h3>Edit Comment</h3>
      <label>Comment:
        <input
          type='text'
          name='content'
          value={content}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default Edit;