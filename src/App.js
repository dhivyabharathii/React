import './loginpage/style.css';
import Login from './loginpage/login'
import { BrowserRouter as Routes,Route, Switch } from "react-router-dom"
import  Table  from './table';


function App() {
  /*const[intern,setIntern]=React.useState([
    {name:"aa", password:"11"},{name:"bb", password:"22"},{name:"cc", password:"33"},
    {name:"dd", password:"12"},{name:"q1", password:"12"}
  ])*/
  return (
    <>
    <Routes>
      <Switch>
        <Route exact path='/'  component={Login}/>
        <Route exact path='/table'  component={Table}/>

        </Switch>
    </Routes>
    </>
  );
}

export default App;
