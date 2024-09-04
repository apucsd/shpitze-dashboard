import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import Logo from "../../assets/logo.png";

import "./style.css";
const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const navigate = useNavigate();

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
      <div
        style={
          {
            // position: "relative",
          }
        }
      >
        <Form
          name="normal_login"
          className="login-form backdrop-blur-lg border"
          initialValues={{
            remember: true,
          }}
          style={{
            width: "630px",

            borderRadius: "12px",
            padding: "90px 57px",
            position: "relative",
            boxShadow: "10px 21px 10px rgba(0, 0, 0, 0.03)",
            zIndex: 100,
          }}
          onFinish={onFinish}
        >
          <img
            style={{
              height: "65px",
              width: "171px",
              margin: "auto",
            }}
            src={Logo}
            alt="logo"
          />
          <h1
            style={{
              fontSize: "24px",
              marginTop: "10px",
              color: "black",
              textAlign: "center",
              fontWeight: 500,
            }}
          >
            Login in to Account
          </h1>
          {/* <p className="text-lg py-6 text-center">
            Please enter your email and password to continue
          </p> */}
          <div style={{ marginBottom: "24px" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",

                color: "#636363",
                marginBottom: "5px",
              }}
            >
              Email
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

          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",

                color: "#636363",
                marginBottom: "5px",
              }}
              htmlFor="password"
            >
              Password
            </label>
            <Form.Item
              style={{ marginBottom: 0 }}
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter your password"
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

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox
                style={{
                  color: "#636363",
                  fontSize: "16px",
                }}
              >
                Remember me
              </Checkbox>
            </Form.Item>
            <a
              className="login-form-forgot"
              style={{ color: "#D93D04", fontWeight: "bold", fontSize: "16px" }}
              href="/forgot-password"
            >
              Forgot password
            </a>
          </div>

          <Form.Item
            style={{
              marginBottom: 0,
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
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
