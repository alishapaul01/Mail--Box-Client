import './App.css';
import AuthForm from './Pages/AuthForm';
import HomePage from './Pages/HomePage';
import {Redirect,Switch,Route} from 'react-router-dom'
import { useSelector } from 'react-redux';
import ComposeMail from './Pages/ComposeMail';
import GetMail from './Components/GetMail';
import InboxMail from './Components/InboxMail';
import SingleMsg from './SideBar/SingleMsg';

function App() {
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
  console.log("isLoggedin",isLoggedIn)
  return (
    <Switch>

      <Route path="/authform">
        <AuthForm/>
        </Route>
        {isLoggedIn && <Route path="/homepage" exact>
          <HomePage/>
        </Route>}
         <Route path="/composemail">
          <ComposeMail/>
        </Route>
        <Route path="/displaymail" >
          <GetMail/>
        </Route>
        <Route path="/inboxdisplay" exact>
          <InboxMail/>
             </Route>
        <Route path="/singlemsg">
          <SingleMsg/>
        </Route>
        <Route path="*">
          <Redirect to="/authform">
            <AuthForm />
          </Redirect>
          </Route>
    </Switch>
  );
}

export default App;