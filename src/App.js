import React from 'react';
import {Headerfull, Headerlimit} from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepages';
import DetailPageWrapper from './Pages/Detailpages';
import Addnotepages from './Pages/Addnotepages';
import ArchivePage from './Pages/ArchivePage';
import Notfound from './Pages/Notfound';
import Path from './Components/Path';
import RegisterPage from './Pages/Registerpage';
import LoginPage from './Pages/Loginpage';
import Blockedpage from './Pages/Blockedpage';
import { getUserLogged, putAccessToken } from '../src/utils/Network-data';


class App extends React.Component{
  constructor(props) {
    super(props);
 
    this.state = {
      authedUser: null,
      initializing: true,
    };
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false
      };
    });
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });
    putAccessToken('');
  }

  
  render(){
    if (this.state.initializing) {
      return null;
    }
    if (this.state.authedUser === null) {
      return (
        <div className='app-container'>
            <Headerlimit />
          <main>
            <Routes>
              <Route path={Path.Login} element={<LoginPage loginSuccess={this.onLoginSuccess} />}/>
              <Route path={Path.Register} element={<RegisterPage/>}/>
              <Route path={Path.Notfound} element={<Blockedpage/>}/>
            </Routes>
          </main>
        </div>
      )
    }

    return(
      <div className='app-container'>
      <Headerfull logout={this.onLogout} name={this.state.authedUser.name}/>
      <main>
        <Routes>
          <Route path={Path.Root} element={<HomePage/>}/>
          <Route path={Path.Note} element={<DetailPageWrapper/>}/>
          <Route path={Path.Add} element={<Addnotepages/>}/>
          <Route path={Path.Archive} element={<ArchivePage/>}/>
          <Route path={Path.Notfound} element={<Notfound/>}/>
          <Route path={Path.Register} element={<RegisterPage/>}/>
          <Route path={Path.Login} element={<LoginPage/>}/>
        </Routes>
      </main>
      </div>
    )
  }
}


export default App;
