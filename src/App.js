import React, { useState,useEffect, Component} from 'react';
import fire from './fire';
import Login from './Login' ;
import CurrentWeather from './components/Weather';
import SignUp from './Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Weather from './components/Weather';


const App = () => {  
  const [user,setUser]=useState('')
  const [phoneno, setPhoneno] = useState('');
  const [email,setEmail] = useState('');
  const [otp,setOtp] = useState('');
  const [name,setName] = useState('');
  const [emailerror,setEmailError] = useState('');
  const [phoneerror,setPhoneError] = useState('');
  const [otperror,setOtperror] = useState('');
  const [hasAccount , setHasAccout] = useState(false);
  
  const cleatInputs =() =>{
    setEmail('');
    setOtp('');
    setPhoneno('');
  }
  const cleatErrors =() =>{
    setEmailError('');
    setOtperror('');
    setPhoneError('');
  }
 
  const handleLogin =() =>{
    cleatErrors();
    fire
    .auth()
    .signInWithEmailAndPassword(email,otp)
    .catch((err) =>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          window.location.href='/signup';
          break;
        case "auth/wrong-otp":
           setOtperror(err.message);
          break;
          default:
      }
    });
    window.location.href='/hero'
  };


  const handleSignUp =() =>{
    cleatErrors();
    fire
    .auth()
    .createUserWithEmailAndPassword(email,otp)    
    .catch((err) =>{
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-otp":
          setOtperror(err.message);
          break;
          default:
      }
    });
    window.location.href='/login'



  };

  const handleLogout =() =>{
    fire.auth().signOut();
    window.location.href='/login'

  };

  const authListener =()=>{
    fire.auth().onAuthStateChanged(user =>{
      if(user)
      {
        cleatInputs();
        setUser(user);
        setName(name);
 
      }
      else{
        setUser("");
        setPhoneno("");
        setName("");
      }

    });
  };

  useEffect(()=>{
    authListener();
  },[]);


  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path='/' exact component={home}/>
        <Route path='/signup'>
        <SignUp
        email={email}  
        setEmail={setEmail} 
        phoneno={phoneno} 
        setPhoneno={setPhoneno} 
        otp={otp} 
        setOtp={setOtp} 
        handleLogin={handleLogin}
        handleSignUp={handleSignUp}
        hasAccount={hasAccount}
        setHasAccout={setHasAccout}
        emailerror={emailerror}
        phoneerror={phoneerror}
        otperror={otperror}
        name={name}
        setName={setName}
        />

        </Route>
        <Route path='/login'>
        <Login 
      email={email}  
      setEmail={setEmail} 
      phoneno={phoneno} 
      setPhoneno={setPhoneno} 
      otp={otp} 
      setOtp={setOtp} 
      handleLogin={handleLogin}
      handleSignUp={handleSignUp}
      hasAccount={hasAccount}
      setHasAccout={setHasAccout}
      emailerror={emailerror}
      phoneerror={phoneerror}
      otperror={otperror}
      name={name}
      setName={setName}
      />
        </Route>
        <Route path='/hero'>
          <CurrentWeather
          handleLogout={handleLogout}
          name={name}
          phoneno={phoneno} />
        </Route>



      </Switch>
    </Router>
    
    </div>
  );
};

const home=() =>{window.location.href='/login'}
export default App