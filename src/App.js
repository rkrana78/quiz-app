import '../src/styles/App.css'
import Layout from './components/Layout/Layout';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';


function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        <Signup />
      </Layout>
    </div>
  );
}

export default App;
