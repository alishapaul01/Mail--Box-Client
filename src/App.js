import './App.css';
import AuthForm from './Pages/AuthForm';
import {Redirect,Switch,Route} from 'react-router-dom'
import { useSelector } from 'react-redux';
import ComposeMail from './Pages/ComposeMail';
import GetMail from './Components/GetMail';
import InboxMail from './Components/InboxMail';

function App() {
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn)
  console.log("isLoggedin",isLoggedIn)
  return (
    <Switch>

      <Route path="/authform">
        <AuthForm/>
        </Route>
        {isLoggedIn &&
         <Route path="/composemail">
          <ComposeMail/>
        </Route>}
        {isLoggedIn &&
        <Route path="/displaymail" >
          <GetMail/>
        </Route>}
        {isLoggedIn && <Route path="/inboxdisplay" exact>
          <InboxMail/>
             </Route>}
        <Route path="*">
          <Redirect to="/authform">
            <AuthForm />
          </Redirect>
          </Route>
    </Switch>
  );
}

export default App;