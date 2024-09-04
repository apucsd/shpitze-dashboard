import { Button } from "antd";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.css";
const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [err, setErr] = useState("");

  const handleResendEmail = () => {
    const email = JSON.parse(localStorage.getItem("email"));
  };
  const handleVerifyOtp = () => {
    Swal.fire({
      title: "Password Reset",
      text: "Your password has been successfully reset. click confirm to set a new password",
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: "Confirm",
      confirmButtonColor: "#F27405",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/update-password");
      }
    });
  };

  return (
    <div
      // className="bgImg"
      style={{
        width: "100%",

        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <div className="bgImg"></div> */}
      <div>
        <div
          className=" backdrop-blur-lg border"
          style={{
            width: "630px",
            boxShadow: "10px 21px 10px rgba(0, 0, 0, 0.03)",
            borderRadius: "12px",
            padding: "90px 57px",
            minHeight: "638.66px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* <h1
            className="font-semibold"
            style={{
              fontSize: "32px",
              color: "black",
              marginBottom: "13px",
              textAlign: "center",
            }}
          >
            Verification code
          </h1> */}
          <p
            style={{
              width: "380px",
              color: "#5C5C5C",
              margin: "0 auto 0 auto",
            }}
          >
            Enter the 6-digit code sent to your email.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={5}
              inputStyle={{
                height: "50px",
                width: "50px",
                borderRadius: "8px",
                marginRight: "16px",
                fontSize: "20px",
                border: "1px solid #A9A9A9",
                color: "#2B2A2A",
                outline: "none",
              }}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Button
              onClick={handleVerifyOtp}
              block
              htmlType="submit"
              style={{
                height: "52px",
                maxWidth: "99px",
                color: "#fff",
                fontWeight: "400px",
                fontSize: "15px",
                background: "#BB6D42",
                marginTop: "10px",
              }}
            >
              Verify
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
              gap: "10px",
            }}
          >
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              Didn’t receive code?
            </p>
            <p
              onClick={handleResendEmail}
              style={{
                color: "#BB6D42",
                // textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Send Again
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
