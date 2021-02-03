import './App.css';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Header from "./Header/Header"
import Home from './Home/Home';
import Checkout from './Checkout/Checkout'
import Login from './Login/Login'
import {useEffect} from "react";
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"

function App() {
  const [{ user }, dispatch] = useStateValue();
  // useEffect <- POWERFUL
  // piece of code that runs based on a give condition
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
    if(authUser){
      //user is logged in
      dispatch({
        type: "SET_USER",
        user:authUser
      })
    } else {
      //user is logged out
      dispatch({
        type: "SET_USER",
        user:null
      })
    }
  });
   return ()=>{
     unsubscribe();
   }
  },[]
  )


  return (
    <Router>
     
      
    <div className="app">
      <Switch>
      <Route path="/checkout">
        <Header/>
        <Checkout/>
       
      </Route>
    <Route path="/login">
        <Login/>
      </Route>
      <Route path="/">
        <Header/>
        <Home/>
     
      </Route>
     
      </Switch>
    </div>
 
    </Router>
  );
  }


export default App;
