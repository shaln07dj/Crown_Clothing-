import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { createAuthUseWithEmailAndPassword, 
    createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";

import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () =>{
    const [formFileds, setFormFileds] = useState(defaultFormFields)
    const {displayName, email, password , confirmPassword } = formFileds

    console.log(displayName)

    const resetFormFields = () => {
        setFormFileds(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !==confirmPassword ) {
            alert('password do not match');
            return;
        }

        try{
            const {user} =await createAuthUseWithEmailAndPassword
            (email, 
            password
                );
                
                // user.displayName=displayName
             
                // user.UserImpl.displayName=displayName
            await createUserDocumentFromAuth(user,{displayName})
            resetFormFields()
        } catch(error){
           if (error.code === 'auth/email-already-in-use'){
               alert('Cannot create user email already in use')
           }
            console.log('user creation encountered an error',error)
        }
    }

    const handleChange = (event) => {
        const {name,value} = event.target;

        setFormFileds({...formFileds,[name]:value})
    }

    return(
        <div className="sign-up-form-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={(handleSubmit)}>
           
            <FormInput 
            label="Display Name"
            type='text' 
            required 
            onChange={handleChange} 
            name='displayName' 
            value={displayName}
            />

            <FormInput 
            label="Email"
            type='email' 
            required 
            onChange={handleChange} 
            name='email' 
            value={email}/>

           
            <FormInput 
            label='Password'
            type='password' 
            required 
            onChange={handleChange} 
            name='password' 
            value={password}/>
            
           
            <FormInput 
            label='Confirm Password'
            type='password' 
            required 
            onChange={handleChange} 
            name='confirmPassword' 
            value={confirmPassword}/>

            <Button childern ="Sign Up" type='submit'></Button>

            </form>
        </div>
    )
}

export default SignUpForm