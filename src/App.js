import '../src/styles/App.css'
 import Layout from './components/Layout/Layout';
import Quiz from './components/pages/Quiz';
// import Home from './components/pages/Home';
// import Signup from './components/pages/Signup';
// import Login from './components/pages/Login'

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        {/* <Signup /> */}
        {/* <Login /> */}
        <Quiz/>
      </Layout>
    </div>
  );
}

export default App;
