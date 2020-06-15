import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as modalActions } from "../../Features/Modal/reducer";
import { actions as signupActions } from "../../Features/Signup/reducer";

function ModalBackdrop(props) {
  const dispatch = useDispatch();
  const signupOpen = useSelector((state) => state.signup.signupOpen.signupOpen)
  const modalOpen = useSelector((state) => state.modalOpen.modalOpen.modalOpen)
  const [backdropOpen, setBackdropOpen] = useState(false);

  useEffect(() => {
    if(signupOpen || modalOpen){
        setBackdropOpen(true)
    } else {
        setBackdropOpen(false)
    }
  }, [signupOpen, modalOpen]);

  const handleBackdropClick = () => {
      setBackdropOpen(false);

      dispatch(
        modalActions.modalOpen({
          modalOpen: false,
        })
      );

      dispatch(
        signupActions.signupOpen({
          signupOpen: false,
        })
      );
  }

  return <div onClick={handleBackdropClick} className={backdropOpen ? "ModalBackdrop" : "ModalBackdropClosed"}></div>;
}

export default ModalBackdrop;
