import AuthProvider from "./auth/AuthContext";
import AppRouter from "./routers/AppRouter";


function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
