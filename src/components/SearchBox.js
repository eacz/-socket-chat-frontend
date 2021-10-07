import { useContext } from "react"
import { AuthContext } from "../auth/AuthContext"

const SearchBox = () => {
  const {logout, auth: { name }} = useContext(AuthContext)
  return (
    <div className='headind_srch'>
      <div className='recent_heading mt-2'>
        <h4>{name}</h4>
      </div>
      <div className='srch_bar'>
        <div className='stylish-input-group'>
          <button onClick={logout} className='btn text-danger'>Log out</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBox
