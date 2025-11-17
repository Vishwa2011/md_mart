import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(30);

  const navigate = useNavigate();

  // Handle OTP inputs
  const handleOtpChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  // Continue Button → Show OTP Section
  const handleContinue = (e) => {
    e.preventDefault();
    if (phone.length === 10) {
      setShowOtp(true);
      setTimer(30); // reset timer
    }
  };

  // Countdown Timer
  useEffect(() => {
    if (showOtp && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [showOtp, timer]);

  // Auto Redirect When OTP Completed
  useEffect(() => {
    if (otp.join("").length === 6) {
      navigate("/");
    }
  }, [otp, navigate]);

  return (
    <>
      {/* ===================== PHONE LOGIN SECTION ===================== */}
      {!showOtp && (
        <section className="log-in-section background-image-2 section-b-space">
          <div className="container-fluid-lg w-100">
            <div className="row">
              <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                <div className="image-contain">
                  <img
                    src="../assets/images/inner-page/log-in.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                <div className="log-in-box">
                  <div className="log-in-title">
                    <h3>Welcome To MD Mart</h3>
                    <h4>Log In Your Account</h4>
                  </div>

                  <div className="input-box">
                    <form className="row g-4" onSubmit={handleContinue}>
                      <div className="col-12">
                        <div className="form-floating theme-form-floating log-in-form">
                          <input
                            type="number"
                            className="form-control"
                            id="phone"
                            placeholder="Enter Phone Number"
                            value={phone}
                            onChange={(e) =>
                              setPhone(e.target.value.slice(0, 10))
                            }
                          />
                          <label>Enter Phone Number</label>
                        </div>
                      </div>

                      <div className="col-12">
                        <button
                          className="btn btn-animation w-100 justify-content-center"
                          type="submit"
                          disabled={phone.length !== 10}
                        >
                          Continue
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="sign-up-box">
                    <h4>Don't have an account?</h4>
                    <a href="/Signup">Sign Up</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===================== OTP VERIFICATION SECTION ===================== */}
      {showOtp && (
         <section class="log-in-section otp-section section-b-space justify-content-center">
        <div class="container-fluid-lg">
            <div class="row">
                <div class="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ">
                    <div class="image-contain">
                        <img src="../assets/images/inner-page/otp.png" class="img-fluid" alt="" />
                    </div>
                </div>

               <div className="col-xxl-4 col-xl-5 col-lg-6 col-sm-8 mx-auto">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <div className="log-in-box text-center">

                    <h3 className="text-title mb-3">OTP Verification</h3>
                    <h5 className="text-content mb-4">
                      OTP has been sent to +91 {phone}
                    </h5>

                    {/* OTP INPUT BOXES */}
                    <div
                      className="d-flex flex-row justify-content-center gap-2 mb-3"
                    >
                      {otp.map((value, index) => (
                        <input
                          key={index}
                          id={`otp-${index}`}
                          className="text-center form-control"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            fontSize: "15px",
                            fontWeight: "600",
                          }}
                          type="text"
                          maxLength="1"
                          value={value}
                          onChange={(e) =>
                            handleOtpChange(e.target.value, index)
                          }
                        />
                      ))}
                    </div>

                    {/* TIMER */}
                    <h3 className="my-3" style={{ fontWeight: 500 }}>
                      00:{timer < 10 ? `0${timer}` : timer}
                    </h3>

                    {/* RESEND */}
                    <h5 className="mt-3">
                      Didn’t get it?
                      <a href="#" className="theme-color fw-bold ms-1">
                        Send OTP (SMS)
                      </a>
                    </h5>

                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
      )}
    </>
  );
};

export default Login;
