import React, { useState } from 'react';

const Post = (props) => {
  
  const [formData, setFormData] = useState({
    content: ''
  })
  const { content } = formData;
  const { campsite, close, handlePost} = props;

  // useEffect(() => {
  //   const prefillFormData = () => {
  //     setFormData({
  //       content: currentComment.content
  //     })
  //   }
  //     prefillFormData()
  // }, [])

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
      handlePost(campsite.id, formData);
      close()
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

export default Post;