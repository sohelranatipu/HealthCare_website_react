import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom" ;
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Header from './Components/Header/Header';
import AuthProvider from './Context/AuthProvider';
import Medicines from './Components/Medicines/Medicines';
import Footer from './Components/Footer/Footer';
import SingleMedicine from './Components/SingleMedicine/SingleMedicine';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Privacy from './Components/Privacy/Privacy';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
       <AuthProvider>
       <Router>
          <Header></Header>
         <Switch>
           <Route exact path="/">
              <Home></Home>
           </Route>
           <Route path="/home">
              <Home></Home>
           </Route>
           <Route path="/medicines">
              <Medicines></Medicines>
           </Route>
           <Route path="/about">
              <About></About>
           </Route>
           <PrivateRoute path="/privacy">
              <Privacy></Privacy>
           </PrivateRoute>
           <Route path="/login">
              <Login></Login>
           </Route>
           <Route path="/register">
              <Register></Register>
           </Route>
           <PrivateRoute path="/singleMedicine/:medicineId">
              <SingleMedicine></SingleMedicine>
           </PrivateRoute>
           <Route path="*">
              <NotFound></NotFound>
           </Route>
         </Switch>
         <Footer></Footer>
       </Router>
       </AuthProvider>
       
    </div>
  );
}

export default App;
