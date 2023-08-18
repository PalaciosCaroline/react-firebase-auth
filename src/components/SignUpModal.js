import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';

export default function SignUpModal() {
  const { modalState, toggleModals } = useContext(UserContext);
  console.log(modalState, toggleModals);

  return (
    <>
      {modalState.signUpModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
            onClick={() => toggleModals('close')}
            className="w-100 h-100 bg-dark bg-opacity-75"
          ></div>
          <div
            className="position-absolute top-50 start-50 translate-middle bg-light px-3 py-3"
            style={{ minWidth: '400px' }}
          >
            <div className="modal-dialog ">
              <div className="modal-content">
                <div className="modal-header pb-2">
                  <h5 className="modal-title">Sign Up</h5>
                  <button
                    className="btn-close"
                    onClick={() => toggleModals('close')}
                  ></button>
                </div>
                <div className="modal-body">
                  <form action="" className="sign-up-form">
                    <div className="mb-3">
                      <label htmlFor="signUpEmail" className="form-label">
                        Email adress
                      </label>
                      <input
                        name="email"
                        required
                        type="email"
                        className="form-control"
                        id="signUpEmail"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="signUpPwd" className="form-label">
                        Password
                      </label>
                      <input
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="signUpPwd"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="repeatPwd" className="form-label">
                        Repeat Password
                      </label>
                      <input
                        name="pwd"
                        required
                        type="password"
                        className="form-control"
                        id="repeatPwd"
                      />
                      <p className="text-danger mt-1"></p>
                    </div>
                    <button className="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
