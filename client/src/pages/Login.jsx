import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import '../components/Login/index.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import '/Placeholder.png'
import { motion } from 'framer-motion';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
      toast.error('Sorry hotshot, please check your login information.')
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <motion.div initial={{ opacity: 0, x:300 }} animate={{ opacity: 1, x:0 }} exit={{ opacity: 0, x:-300 }} transition={{ duration: 1.5 }}>
    <div className="login-container">
      <div className="card login-card">
        <h1 className='arena-header'>Let The Games Begin</h1>
        <img src="/Placeholder2.png" alt="GenericShooterGirl" className="logo" />
        <h2 className="card-header">Login</h2>
        <div className="card-body">
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="*********"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className="btn btn-block btn-primary login-btn"
                type="submit"
              >
                Let's Go
              </button>
            </form>
          )}

          {error && (
            <div className="error-message">
              Sorry hotshot there was an error
            </div>
            
          )}
          <div className="signup-link" >
            Aren't registered? <Link className="signUp" to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
      <ToastContainer newestOnTop theme="dark" className="my-toast-container" />
    </div>
    </motion.div>
  );
};

export default Login;
