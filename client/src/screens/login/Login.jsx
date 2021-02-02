import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData;
  const { handleLogin, close } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form className='form' onSubmit={(e)=> {
      e.preventDefault();
      handleLogin(formData);
      close()
    }}>
      <h3>Login</h3>
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        type='text'
        name='username'
        value={username}
        onChange={handleChange}
      />
      <br />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type='password'
        name='password'
        value={password}
        onChange={handleChange}
      />
      <br />
      <Button variant="contained" id='form-button' type='submit' size='small'>Submit</Button>
    </form>
  )
}
