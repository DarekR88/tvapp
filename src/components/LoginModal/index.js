import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as modalActions } from "../../Features/Modal/reducer";


function LoginModal(props) {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.modalOpen.modalOpen.modalOpen)
  const loggedIn = useSelector((state) => state.loggedIn.loggedIn);

  const handleClose = () => {
    dispatch(
      modalActions.modalOpen({
        modalOpen: false,
      })
    );
  }
  
  return (
    <div className={modalOpen ? "LoginModal-open" : "modal-closed"}>
      <button className='modal-x' onClick={handleClose}>X</button>
      <form action="" method="get" className="loginForm">
        <div className="loginForm">
          <label for="name">Enter a screen name: </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="loginForm">
          <label for="email">Enter your email: </label>
          <input type="email" name="email" id="email" required />
        </div>
        {/* <div>
          <label for='pwd'>Password:</label>
          <input type='password' id='pwd' name='pwd' required />
        </div>
        <div>
          <label for='pwd-c'>Confirm Password:</label>
          <input type='password' id='pwd-c' name='pwd-c' required />
        </div> */}
        <div className="loginButton">
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}

export default LoginModal;
