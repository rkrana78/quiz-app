import '../src/styles/App.css'
import Layout from './components/Layout/Layout';
import Result from './components/pages/Result';
import Quiz from './components/pages/Quiz';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login'
import { AuthProvider } from './contexts/AuthContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';



function App() {
  return (
    <Router >
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <PublicRoute path='/signup' component={Signup} />
            <PublicRoute path='/login' component={Login} />
            <PrivateRoute path='/quiz/:id' component={Quiz} />
            <PrivateRoute path='/result/:id' component={Result} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
