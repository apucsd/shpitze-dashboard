import { Button, Form, Input, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    localStorage.setItem("email", JSON.stringify(values.email));
    console.log("Received values of form: ", values.email);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Send OTP ",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      navigate("/otp");
    });
  };
  return (
    <div
      className="   "
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",

        height: "100vh",
      }}
    >
      {/* <div className="bgImg"></div> */}
      <div>
        <Form
          name="normal_login"
          className="login-form backdrop-blur-lg border"
          initialValues={{
            remember: true,
          }}
          style={{
            width: "630px",
            boxShadow: "10px 21px 10px rgba(0, 0, 0, 0.03)",
            borderRadius: "12px",
            padding: "90px 57px",
            position: "relative",
            zIndex: 100,
          }}
          onFinish={onFinish}
        >
          <h1
            style={{
              fontSize: "24px",
              color: "black",
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            Forgot password ?
          </h1>
          <p
            style={{
              color: "rgba(92, 92, 92, 1)",
              textAlign: "center",
              fontWeight: 400,
              marginTop: "10px",
            }}
          >
            Enter your email below to reset your password
          </p>

          <div className=" mb-[24px] mt-[28px]">
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "5px" }}
            >
              {" "}
              Email{" "}
            </label>
            <Form.Item
              style={{ marginBottom: 0 }}
              name="email"
              id="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                placeholder="Enter your email address"
                type="email"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "52px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                }}
              />
            </Form.Item>
          </div>

          <Form.Item
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => navigate("/")}
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
              style={{
                height: "52px",
                maxWidth: "99px",

                fontWeight: "400px",
                fontSize: "15px",
                background: "#BB6D42",
                marginTop: "10px",
              }}
            >
              Send Code
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
    // <div
    //   style={{
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     width: "100%",

    //     height: "100vh",
    //   }}
    // >
    //   <div className="bgImg"></div>
    //   <div>
    //     <Form
    //       name="normal_login backdrop-blur-lg bg-white/70"
    //       className="password-form"
    //       initialValues={{
    //         remember: true,
    //       }}
    //       style={{
    //         width: "630px",

    //         borderRadius: "12px",
    //         padding: "90px 57px",
    //       }}
    //       onFinish={onFinish}
    //     >
    //       <h1
    //         style={{
    //           fontSize: "32px",
    //           marginBottom: "54px",
    //           color: "#494949",
    //           textAlign: "center",
    //         }}
    //       >
    //         Forgot Password
    //       </h1>

    //       <div style={{ marginBottom: "24px" }}>
    //         <label
    //           htmlFor="email"
    //           style={{ display: "block", marginBottom: "5px" }}
    //         >
    //           {" "}
    //           Email Address
    //         </label>
    //         <Form.Item
    //           style={{ marginBottom: 0 }}
    //           name="email"
    //           id="email"
    //           rules={[
    //             {
    //               required: true,
    //               message: "Please input your email!",
    //             },
    //           ]}
    //         >
    //           <Input
    //             placeholder="Enter your email address"
    //             type="email"
    //             style={{
    //               border: "1px solid #E0E4EC",
    //               height: "52px",
    //               background: "white",
    //               borderRadius: "8px",
    //               outline: "none",
    //             }}
    //           />
    //         </Form.Item>
    //       </div>

    //       <Form.Item>
    //         <Button
    //           type="primary"
    //           htmlType="submit"
    //           className="login-form-button"
    //           block
    //           style={{
    //             height: "45px",
    //             fontWeight: "400px",
    //             fontSize: "18px",
    //             background: "#2FD5C7",
    //             color: "white",
    //             alignSelf: "bottom",
    //             marginTop: "30px",
    //           }}
    //         >
    //           Send a Code
    //         </Button>
    //       </Form.Item>
    //     </Form>
    //   </div>
    // </div>
  );
};

export default ForgotPassword;
