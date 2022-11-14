import React from 'react';
import { Link } from 'react-router-dom';
import Path from '../Components/Path';

class Blockedpage extends React.Component{

  render(){
    return(
      <section className='notes-list-empty'>
        <h1 className='notes-list-empty p'>Kamu belum ada akses </h1>
        <h2 className='notes-list-empty p'>Silahkan <Link to={Path.Login}>Login</Link> atau <Link to={Path.Register}>Register</Link> terlebih dahulu </h2>
        </section>
    )
  }
}
export default Blockedpage;
