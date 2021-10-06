import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const LoginPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: true
  })

  const handleChange = ({target: {name, value}}) => setForm({ ...form, [name] : value})

  const toggleCheck = () => setForm({...form, remember: !form.remember})

  const handleSubmit = (e) => {
    e.preventDefault()
    
    form.remember 
      ? localStorage.setItem('email', form.email)
      : localStorage.removeItem('email')

    //TODO: call to backend
    
  }

  //set remembered email
  useEffect(() => {
    const email = localStorage.getItem('email')
    if(email){
      setForm({...form, email, remember:true})
    }
  }, [])


  return (
    <form onSubmit={handleSubmit} className='login100-form validate-form flex-sb flex-w'>
      <span className='login100-form-title mb-3'>Login</span>

      <div className='wrap-input100 validate-input mb-3'>
        <input value={form.email} onChange={handleChange} className='input100' type='email' name='email' placeholder='Email' />
        <span className='focus-input100'></span>
      </div>

      <div className='wrap-input100 validate-input mb-3'>
        <input value={form.password} onChange={handleChange} className='input100' type='password' name='password' placeholder='Password' />
        <span className='focus-input100'></span>
      </div>

      <div className='row mb-3'>
        <div className='col' onClick={toggleCheck}>
          <input checked={form.remember} readOnly  className='input-checkbox100' id='ckb1' type='checkbox' name='remember' />
          <label className='label-checkbox100'>Remember me</label>
        </div>

        <div className='col text-right'>
          <Link to="/auth/register" className='txt1'>
            New account?
          </Link>
        </div>
      </div>

      <div className='container-login100-form-btn m-t-17'>
        <button type="submit" className='login100-form-btn'>Login</button>
      </div>
    </form>
  )
}

export default LoginPage
