import { Route, Switch } from "react-router-dom";
import './App.css';
import Layout from './components/layout/Layout';
import About from "./pages/About";
import Home from './pages/Home';
import PersonApi from "./pages/PersonApi";

function App() {

  return (
   <Layout>
     <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/api">
          <PersonApi/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
   </Layout>
  );
}

export default App;