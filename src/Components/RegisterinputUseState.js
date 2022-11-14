import React, { useState } from 'react'
import PropTypes from 'prop-types';


 
function RegisterInputUseState({registeradd}) {
 
 const [name,setUsername] = useState("");
 const [password,setPassword] = useState("");
 const [email,setEmail] = useState("");

 const handleusername = (e) => {setUsername(e.target.value)}
 const handlepassword = (e) => {setPassword(e.target.value)}
 const handleemail =  (e) => {setEmail(e.target.value)}

 const WarpRegister = { name,
                password,
                email, }

 const handleSubmit= (event) => {
  event.preventDefault();
  registeradd(WarpRegister);
  console.log(WarpRegister)
  setUsername("")
  setPassword("")
  setEmail("")
 }


    return (
      <form onSubmit={handleSubmit} className='register-input' >
        <input type="text" placeholder="Nama" value={name} onChange={handleusername}  />
        <input type="email" placeholder="Email" value={email} onChange={handleemail}  />
        <input type="password" placeholder="Password" autoComplete='current-password' value={password} onChange={handlepassword} />
        <button>Register</button>
      </form>
    )
}
 
RegisterInputUseState.propTypes = {
  registeradd : PropTypes.func.isRequired,
};
 
export default RegisterInputUseState;