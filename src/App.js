import '../src/styles/App.css'
import Layout from './components/Layout/Layout';
import Result from './components/pages/Result';
import Quiz from './components/pages/Quiz';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router >
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/quiz' component={Quiz} />
          <Route path='/result' component={Result} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
