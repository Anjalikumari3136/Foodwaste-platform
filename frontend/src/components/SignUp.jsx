import React from 'react'

function SignUp() {
  const handleSignInRedirect = () => {
    window.location.href = "/signin";
  };

  return (
    <>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <button className="signin-button" onClick={handleSignInRedirect}>
          Already registered? Sign In
        </button>
      </div>
      <style jsx>
        {`
          .signup-container {
            width: 300px;
            margin: 50px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            background-color: #f9f9f9;
          }
          .form-group {
            margin-bottom: 15px;
          }
          label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
          }
          input {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          button {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
          }
          button:hover {
            background-color: #0056b3;
          }
          .signin-button {
            background-color: #6c757d;
          }
          .signin-button:hover {
            background-color: #5a6268;
          }
        `}
      </style>
    </>
  );
}

export default SignUp