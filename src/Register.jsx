import React from 'react'

function Register() {
  const [form, setForm] = React.useState({"email": "", "password": ""})
  const handleFormChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
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
      <button>Submit</button>
    </form>
  )
}

export default Register