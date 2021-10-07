import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert2'
import { AuthContext } from '../auth/AuthContext'
import Spinner from '../components/Spinner'
import formatError from '../helpers/formatError'

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: '', username: '', email: '', password: ''
  })

  const {register, auth: { loading, errors }} = useContext(AuthContext)

  const handleChange = ({target: {name, value}}) => setForm({ ...form, [name] : value})

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {name, username, email, password} = form
    const ok = await register(name, username, email, password)
    if(!ok){
      const errorsFormatted = formatError(errors)
      swal.fire('Error', errorsFormatted, 'error')
    }
  }

  const checkForm = () => !(form.email && form.password.length >= 8 && form.name && form.username)


  return (
    <form onSubmit={handleSubmit} className='login100-form validate-form flex-sb flex-w'>
      <span className='login100-form-title mb-3'>Register</span>

      <div className='wrap-input100 validate-input mb-3'>
        <input value={form.name} onChange={handleChange} className='input100' type='text' name='name' placeholder='Name' />
        <span className='focus-input100'></span>
      </div>
      
      <div className='wrap-input100 validate-input mb-3'>
        <input value={form.username} onChange={handleChange} className='input100' type='text' name='username' placeholder='Username' />
        <span className='focus-input100'></span>
      </div>

      <div className='wrap-input100 validate-input mb-3'>
        <input value={form.email} onChange={handleChange} className='input100' type='email' name='email' placeholder='Email' />
        <span className='focus-input100'></span>
      </div>

      <div className='wrap-input100 validate-input mb-3'>
        <input value={form.password} onChange={handleChange} className='input100' type='password' name='password' placeholder='Password' />
        <span className='focus-input100'></span>
      </div>

      <div className='row mb-3'>
        <div className='col text-right'>
          <Link to="/auth/login" className='txt1'>
            Already have an account?
          </Link>
        </div>
      </div>
      <div className='container-login100-form-btn m-t-17'>
        {
          loading 
          ? <Spinner />
          : <button disabled={checkForm()} type="submit" className='login100-form-btn'>Create account</button>
        }

      </div>
    </form>
  )
}

export default RegisterPage
