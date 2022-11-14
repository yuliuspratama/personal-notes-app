import React from 'react';
import { Link } from 'react-router-dom';
import Path from '../Components/Path';
// import RegisterInput from '../Components/Registerinput';
import RegisterInputUseState from '../Components/RegisterinputUseState';
import { register } from '../utils/Network-data';

 
function RegisterPage() {
    
    async function onRegisterHandler(user) {
    await register(user);
  }
 
  return (
    <section className='register-page'>
      <h2>Register</h2>
      <RegisterInputUseState registeradd={onRegisterHandler} />
      <p>Kembali ke <Link to={Path.Login}>Masuk</Link></p>
    </section>
  )
}
 
export default RegisterPage;