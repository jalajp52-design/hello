import React from 'react';
import './Signin.css';

export default function Signin() {
  return (
    <div className="signin-page">
      <div className="signin-container">
        <form className="hello d-flex flex-column">

          <label className="name">Name</label>
          <input className="btn mb-3" type="text" placeholder="Type name" />

          <label className="name">Password</label>
          <input className="btn mb-3" type="password" placeholder="Password" />

          <label className="name">Retype pass</label>
          <input className="btn mb-3" type="password" placeholder="Retype password" />

          <label className="name">Address</label>
          <input className="btn mb-3" type="text" placeholder="Address" />

          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center mb-3">
            <div className="me-3">
              <input type="radio" name="gender" value="male" id="male" />
              <label htmlFor="male" className="name ms-1">Male</label>
            </div>
            <div>
              <input type="radio" name="gender" value="female" id="female" />
              <label htmlFor="female" className="name ms-1">Female</label>
            </div>
          </div>

          <div className="d-flex flex-column flex-sm-row">
            <input className="ss mb-2 mb-sm-0 me-sm-2" type="submit" value="Submit" />
            <input className="ss" type="reset" value="Reset" />
          </div>

        </form>
      </div>
    </div>
  );
}
