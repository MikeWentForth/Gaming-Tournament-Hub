import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/Signup/index.css';
import { useMutation } from '@apollo/client';
import { ADD_PLAYER } from '../utils/mutations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addPlayer, { error, data }] = useMutation(ADD_PLAYER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(formState);

    try {
      const { data } = await addPlayer({
        variables: { ...formState },
      });

      Auth.login(data.addPlayer.token);
    } catch (e) {
      console.error(e);
      toast.error('Woah there hotshot, seems like there is something wrong with your signup information.')
    }
  };

  return (
    <motion.div initial={{ opacity: 0, x:-300 }} animate={{ opacity: 1, x:0 }} exit={{ opacity: 0, x:300 }} transition={{ duration: 1.0 }}>
    <main className="signup-container">
      <div className="signup-card">
      <img src="/tournhub.png" alt="GenericIcon" className="signup-logo" />
      <h1 className='title-header'>This Is Where Legends Are Made</h1>
        <div className="signup-header">
          <h4 className="signup-card-header">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="signup-form-input"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="signup-form-input"
                  placeholder="Username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="signup-form-input"
                  placeholder="***********"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary signup-btn"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Lets Roll
                </button>
              </form>
            )}

            {error && (
              <div className="signup-error">
                Woah there champ, there was an error
              </div>
            )}
            <div className="login-link" >
            Already registered? <Link className="logIn" to="/login">Login here</Link>
          </div>
          </div>
        </div>
        <ToastContainer newestOnTop theme="dark" className="my-toast-container" />
      </div>
    </main>
    </motion.div>
  );
};

export default Signup;
