import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../utils/Network-data';
import Path from '../Components/Path';
import { useNavigate } from 'react-router-dom';
import LoginInputUseState from '../Components/LoginInputUseState';
import PropTypes from 'prop-types';

function LoginPage({ loginSuccess }) {
    const navigate = useNavigate();
    async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
    console.log(data) 
    if (!error) {
      loginSuccess(data);
      navigate(Path.Root);
    }
  }
  return (
    <section className='login-page'>
      <h2>Silahkan Login</h2>
      <LoginInputUseState login={onLogin} />
      <p>Belum punya akun? <Link to={Path.Root}>Daftar di sini.</Link></p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired
}
 
export default LoginPage;