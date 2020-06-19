import React from "react";

const handleChange = e => {
e.preventDefault();

}

const handleSubmit = e => {
  e.preventDefault();

}


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <form className="loginForm">
      <h1>Welcome to the Bubble App!</h1>
     <label>Username:<input name="username" type="text" onChange={handleChange} /></label> 
     <label>  Password:<input name="password" type="password" onChange={handleChange} /></label> 
      <button onSubmit={handleSubmit} className="btn">Login</button>
    </form>
  );
};

export default Login;
