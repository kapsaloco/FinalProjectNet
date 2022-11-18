import { Route, Switch } from "react-router-dom";
import './App.css';
import Layout from './components/layout/Layout';
import About from "./pages/About";
import Claims from "./pages/Claims";
import Home from './pages/Home';
import Owners from "./pages/Owners";
import Vehicles from "./pages/Vehicles";

function App() {

  return (
   <Layout>
     <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/owners">
          <Owners/>
        </Route>
        <Route path="/vehicles">
          <Vehicles/>
        </Route>
        <Route path="/claims">
          <Claims/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
   </Layout>
  );
}

export default App;