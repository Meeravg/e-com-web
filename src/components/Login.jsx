import React from 'react';
import './style.css'

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.lgemail.value;
    const password = event.target.elements.lgpass.value;
    const userdetails = { email, password };
    const details = JSON.parse(localStorage.getItem('userdetails')) || {};
    if (userdetails.email === details.email && userdetails.password === details.password) {
      console.log('Login success');
      localStorage.setItem('isAuth', 'Authenticated');
      alert('Login success');
      window.location.href = '/';
    } else {
      alert('Wrong Details');
    }
  };

  return (
    <>
      <div className='container11'>
        <h1>Login Page</h1>
        <br/><br/><br/><br/><br/>
        <form id="lgform" onSubmit={handleSubmit}>
          <label>Email:</label>
          <input id="lgemail" type="text" />
          <br/><br/>
          <label>Password:</label>
          <input id="lgpass" type="text" />
          <br/><br/>
          <input type="submit" />
        </form>
      </div>
      <br/><br/>
      <div className='container11'>
        <h3>If Not signed up</h3>
        <div>
          <a href="signup.html">
            <button>Sign up</button>
          </a>
        </div>
      </div>
      <br/><br/>
      <div className='container11'>
        <h3>Home Page</h3>
        <a href="website.html">
          <button className="bts">Home Page</button>
        </a>
      </div>
    </>
  );
};

export default Login;
