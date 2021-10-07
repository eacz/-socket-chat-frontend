import Spinner from "../components/Spinner"
import '../css/spinner.css'

const LoadingPage = () => {
  return (
    <div className="loading-container">
      <h1> Wait a minute... </h1>
      <Spinner />
    </div>
  )
}

export default LoadingPage
