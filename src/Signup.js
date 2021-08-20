import React from 'react'

const SignUp = (props) =>{
    const{email,
         setEmail, 
         phoneno,
         setPhoneno,
         otp,
         setOtp,
         handleLogin,
         handleSignUp,
         hasAccount,
         setHasAccout,
         emailerror,
         phoneerror,
         otperror,
         name,
         setName
        }=props;


    return (
        <section className="login">
       
            <div className="loginContainer">
            <h1>Sign Up</h1>
            <label>Name</label>
                <input type="text" autoFocus required value={name} onChange={e => setName(e.target.value)}
                />
                <label>Email</label>
                <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailerror}</p>
                <label>OTP</label>
                <input type="password" required value={otp} onChange={e => setOtp(e.target.value)}
                />
                <p className="errorMsg">{otperror}</p>
                <div className="btnContainer">
                    <button onClick={handleSignUp}>Sign Up</button>
                 </div>

            </div>
        </section>
    )
}
export default SignUp
