import { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ChatPage from '../pages/ChatPage'
import AuthRouter from './AuthRouter'
import { AuthContext } from '../auth/AuthContext';
import LoadingPage from '../pages/LoadingPage';
const AppRouter = () => {
  const { verifyToken, auth: { checking } } = useContext(AuthContext)
 

  useEffect(() => {
    verifyToken()
  }, [verifyToken])

  if(checking){
    return <LoadingPage />
  }
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route exact path="/" component={ChatPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
