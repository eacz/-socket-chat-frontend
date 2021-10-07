import { Route, Redirect } from "react-router-dom"


const PrivateRoute = ({isAuth, component: Component, ...rest}) => {
  return (
    <Route 
      {...rest} 
      component={props => (
        isAuth 
          ? <Component {...props} /> 
          : <Redirect to="/auth" />
      )}
    />
  )
}

export default PrivateRoute
