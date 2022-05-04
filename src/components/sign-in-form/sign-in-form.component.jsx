import { useState, useContext } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

import {
  signInWithGooglePopup,
  createAuthUseWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUseWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";
import { async } from "@firebase/util";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFileds, setFormFileds] = useState(defaultFormFields);
  const { email, password } = formFileds;

   const {setCurrentUser} = useContext(UserContext)

  const resetFormFields = () => {
    setFormFileds(defaultFormFields);
  };

  const signInWithGoogle =async () => {
    
    await signInWithGooglePopup();
    
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await signInAuthUseWithEmailAndPassword(email,
        password);

        //  setCurrentUser(user)
      
      console.log(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
      //   if(error.code === "auth/wrong-password"){
      //       alert('incorrect password')

      //   }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFileds({ ...formFileds, [name]: value });
  };

  return (
    <div className="sign-up-form-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button childern="Sign In" type="submit"></Button>
          <Button type ='button'
            buttonType="google"
            onClick={signInWithGoogle}
            childern="Google sign in"
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
