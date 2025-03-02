import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebase.config';

function SignIn() {
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    })

    const { email, password } = formData
    const navigate = useNavigate()

    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value // Dynamically set the key in the object using the id of the input field and set the value to the value of the input field
      }))
    }

    const onSubmit = async (e) => {
      e.preventDefault() // Prevent the default form submission behavior which refreshes the page and clears the form data

      try {
        const auth = getAuth()
        const userCredential = await signInWithEmailAndPassword(auth, email, password)

        if(userCredential.user){
          navigate('/')
        }

      } catch (error) {
        console.log(error)
      }
    }

    return (
      <>
        <div className="pageContainer">
          <header>
            <p className="pageHeader">
              Welcome Back!
            </p>
          </header>

          <form onSubmit={onSubmit}>
            <input 
              type='email' 
              className='emailInput' 
              placeholder='Email' 
              id='email' 
              value={email} 
              onChange={onChange} />

            <div className="passwordInputDiv">
              <input 
                type={showPassword ? 'text' : 'password'}
                className='passwordInput' 
                placeholder='Password' 
                id='password' 
                value={password} 
                onChange={onChange} />

                <img src={visibilityIcon} alt='show passoword' className='showPassword' onClick={() => setShowPassword((prevState) => !prevState)} />
            </div>

            <Link to='/forgot-password' className='forgotPasswordLink'>
              Forgot Password
            </Link>

            <div className="signInBar">
              <p className="signInText">
                Sign In
              </p>

              <button className="signInButton">
                <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
              </button>
            </div>
          </form>

          { /* Google OAuth */}

          <Link to={'/sign-up'} className='registerLink'>
            Sign Up Instead
          </Link>
        </div>
      </>
    );
  }

export default SignIn;