//import logo from './logo.svg';
import './loginpage/style.css';
import Login from './loginpage/login'
import { BrowserRouter as Router,Route,Switch } from "react-router-dom"



function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={Login}>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
