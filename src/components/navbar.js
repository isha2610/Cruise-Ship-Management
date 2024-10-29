import React from 'react'
import { Link } from 'react-router-dom';
import SignUp from './signup';
import LogIn from './login';

export default function Navbar() {
  return (
    <div>
      <Link to="SignUp"><button>SignUp</button></Link>
      <Link to="LogIn"><button>LogIn</button></Link>
    </div>
  );
};