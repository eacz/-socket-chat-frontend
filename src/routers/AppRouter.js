import { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import ChatPage from '../pages/ChatPage'
import AuthRouter from './AuthRouter'
import { AuthContext } from '../auth/AuthContext';
import LoadingPage from '../pages/LoadingPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
const AppRouter = () => {
  const { verifyToken, auth: { checking, logged } } = useContext(AuthContext)
 

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
          {/*<Route path="/auth" component={AuthRouter} />*/}
          <PublicRoute isAuth={logged} path="/auth" component={AuthRouter} />
          <PrivateRoute isAuth={logged} exact path="/" component={ChatPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
