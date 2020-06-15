import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as signupActions } from "../../Features/Signup/reducer";


function SignupModal(props) {
  const dispatch = useDispatch();
  const signupOpen = useSelector((state) => state.signup.signupOpen.signupOpen)
  const loggedIn = useSelector((state) => state.loggedIn.loggedIn);

  const handleClose = () => {
    dispatch(
      signupActions.signupOpen({
        signupOpen: false,
      })
    );
  }
  
  return (
    <div className={signupOpen ? "SignupModal-open" : "SignupModal-closed"}>
      <button className='modal-x' onClick={handleClose}>X</button>
      <form action="" method="get" className="signupForm">
        <div className="signupForm">
          <label for="name">Enter a screen name: </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="signupForm">
          <label for="email">Enter your email: </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label for='pwd'>Password:</label>
          <input type='password' id='pwd' name='pwd' required />
        </div>
        <div>
          <label for='pwd-c'>Confirm Password:</label>
          <input type='password' id='pwd-c' name='pwd-c' required />
        </div>
        <div className="loginButton">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}

export default SignupModal;