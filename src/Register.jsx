import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from './App';

function Register() {
  const [form, setForm] = React.useState({"email": "", "password": ""})
  let navigate = useNavigate()
  let [user, setUser] = useContext(userContext)

  const handleFormChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        console.log(userCredential)
      // Signed in 
      const user = userCredential.user;
      setUser(user)
      navigate("/")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  }



  return (
    <form>
      <label htmlFor="email">
        Email
        <br />
        <input type="text" name="email" style={{width: "100%", boxSizing: 'border-box'}} 
        value={form.email} onChange={handleFormChange}/>
      </label>

      <br />
      <label htmlFor="password">
        Password 
        <br />
        <input type="password" name="password" style={{width: "100%", boxSizing: 'border-box'}}
        value={form.password} onChange={handleFormChange}/>
      </label>

      <br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default Register