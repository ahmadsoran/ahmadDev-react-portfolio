import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginUserMutation } from '../app/portfolioAPI';
import { removeToken, setToken } from '../featrues/tokenSlice';
import './admin.css'
export default function Login() {
  const [loginToAcc, { isError, isLoading, isSuccess, data }] = useLoginUserMutation();
  const [inputInfo, setinputInfo] = useState({});
  const token = useSelector(state => state.tokenSlice.token);
  if (token) {

    window.location.href = '/dashboard';

  }

  const inputDataHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setinputInfo((prvData) => ({ ...prvData, [name]: value }))
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const userObject = {
      username: inputInfo.username,
      password: inputInfo.password,
      code: inputInfo.code,
    };
    loginToAcc(userObject).unwrap();


  };
  const dispatch = useDispatch();

  if (data) {

    dispatch(setToken(data.token));

  }
  if (isSuccess) {
    window.location.href = '/dashboard';
  }



  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>



      <div className="log">
        <h2>Welcome Back</h2>

        <div className="input-cont">
          <input
            id="email-address"
            name="username"
            type="text"
            value={inputInfo.username || ""}
            onChange={inputDataHandler}
            autoComplete="false"
            required
          />
          <label>Username</label>
          <div className="border1"></div>
        </div>
        <div className="input-cont">
          <input
            name="password"
            type="password"
            value={inputInfo.password || ""}
            onChange={inputDataHandler}
            autoComplete="false"
            required
          />

          <label>Password</label>
          <div className="border2"></div>
        </div>   <div className="input-cont">

          <input
            name="code"
            type="password"
            value={inputInfo.code || ""}
            onChange={inputDataHandler}
            required
          />
          <label>secret code</label>
          <div className="border2"></div>
        </div>
        <span className="check">
          <input type="checkbox" /> <label>Remember Me</label>
        </span>

        <div className="clear"></div>
        {isError && <p style={{ color: 'red', textAlign: 'center', fontSize: 'clamp(1rem, 1.3vw , 1.3vw)' }}>invaild email or password</p>}

        <button className='submitInput' type="submit">{isLoading ? <p className="loading">|</p> : 'sign In'}</button>

      </div>

    </form>
  )
}
