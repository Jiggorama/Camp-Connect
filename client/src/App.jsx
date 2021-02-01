import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Container from "./containers/Container";
import Layout from "./shared/layout/Layout";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import { loginUser, registerUser, verifyUser, removeToken } from "./services/userAuth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/')
  }

  const handleLogout = (e) => {
    e.preventDefault()
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/')
  }

  return (
    <Layout
      user={currentUser}
      logout={handleLogout}
      handleLogin={handleLogin}
      handleRegister={handleRegister}
    >
      <Switch>
        <Route path="/">
          <Container
            user={currentUser}
          />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
