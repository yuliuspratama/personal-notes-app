import React, { useState } from 'react'
import PropTypes from 'prop-types';
 
function LoginInputUseState ({login}) {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
 
  const handlepassword = (e) => {setPassword(e.target.value)}
  const handleemail =  (e) => {setEmail(e.target.value)}

  const WarpLogin = { password,
    email, }

  const handleSubmit= (event) => {
    event.preventDefault();
    login(WarpLogin);
    console.log(WarpLogin)
    setPassword("")
    setEmail("")
     }
 

    return (
      <form onSubmit={handleSubmit} className='login-input'>
        <input type="email" placeholder='Email' value={email} onChange={handleemail} />
        <input type="password" placeholder='Password' value={password} onChange={handlepassword} />
        <button>Masuk</button>
      </form>
    );
}
 
LoginInputUseState.propTypes = {
  login: PropTypes.func.isRequired,
}
 
export default LoginInputUseState;