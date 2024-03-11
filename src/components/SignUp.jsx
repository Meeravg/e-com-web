import React from 'react';
import './style.css'

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.sgemail.value;
    const password = event.target.elements.sgpass.value;
    const userdetails = { email, password };
    localStorage.setItem('userdetails', JSON.stringify(userdetails));
    window.location.href = './login.html';
  };

  return (
    <>
      <div className='container11'>
        <h1>Signup Page</h1>
        <br/><br/>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input id="sgemail" type="text" />
          <br/><br/>
          <label>Password:</label>
          <input id="sgpass" type="text" />
          <br/><br/>
          <input type="submit" />
        </form>
      </div>
      <br/><br/>
      <div className='container11'>
        <h3>If signed up</h3>
        <div>
          <a href="login.html">
            <button>Login</button>
          </a>
        </div>
      </div>
      <br/><br/><br/>
      <div className='container11'>
        <h3>Home Page</h3>
        <a href="website.html">
          <button className="bts">Home Page</button>
        </a>
      </div>
    </>
  );
};

export default SignUp;
