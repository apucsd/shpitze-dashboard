import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.css";
const UpdatePassword = () => {
  const navigate = useNavigate();
  const [newPassError, setNewPassError] = useState("");
  const [conPassError, setConPassError] = useState("");
  const [err, setErr] = useState("");
  const onFinish = (values) => {
    const { password, confirmPassword } = values;
    Swal.fire({
      title: "Successfully",
      text: "Your password has been updated, please change your password regularly to avoid this happening",
      showDenyButton: false,
      showCancelButton: false,
      confirmButtonText: "Confirm",
      confirmButtonColor: "#F27405",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };

  return (
    <div
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
        <Form
          name="normal_login"
          className="login-form  backdrop-blur-lg border"
          initialValues={{
            remember: true,
          }}
          style={{
            width: "630px",
            boxShadow: "10px 21px 10px rgba(0, 0, 0, 0.03)",
            borderRadius: "12px",
            padding: "90px 57px",
          }}
          onFinish={onFinish}
        >
          <h1
            style={{
              fontSize: "32px",
              // color: "black",
              marginBottom: "13px",
              textAlign: "center",
              color: "#333333",
              fontWeight: "bold",
            }}
          >
            Create New Password
          </h1>
          <p
            style={{
              color: "#5C5C5C",
              fontSize: "14px",
              fontWeight: 400,
              margin: "0 auto 0 auto",
              textAlign: "center",
            }}
          >
            Your new password must be different from previous passwords.
          </p>

          <div style={{ margin: "45px 0 20px 0" }}>
            <label
              style={{
                display: "block",
                color: "#5C5C5C",
                marginBottom: "5px",
              }}
              className="font-semibold"
              htmlFor=""
            >
              New Password
            </label>
            <Form.Item
              name="new_password"
              rules={[
                {
                  required: true,
                  message: "Please input your new Password!",
                },
              ]}
              style={{ marginBottom: 0 }}
            >
              <Input.Password
                type="password"
                placeholder="Enter New password"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "52px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                }}
              />
            </Form.Item>
            {newPassError && (
              <label style={{ display: "block", color: "red" }} htmlFor="error">
                {newPassError}
              </label>
            )}
          </div>

          <div style={{ marginBottom: "40px" }}>
            <label
              style={{
                display: "block",
                color: "#5C5C5C",
                marginBottom: "5px",
              }}
              htmlFor="email"
              className="font-semibold"
            >
              Confirm Password
            </label>
            <Form.Item
              style={{ marginBottom: 0 }}
              name="confirm_password"
              rules={[
                {
                  required: true,
                  message: "Please input your Confirm Password!",
                },
              ]}
            >
              <Input.Password
                type="password"
                placeholder="Enter Confirm password"
                style={{
                  border: "1px solid #E0E4EC",
                  height: "52px",
                  background: "white",
                  borderRadius: "8px",
                  outline: "none",
                }}
              />
            </Form.Item>
            {conPassError && (
              <label style={{ display: "block", color: "red" }} htmlFor="error">
                {conPassError}
              </label>
            )}
          </div>

          <Form.Item
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{
                height: "52px",
                width: "fit-content",
                color: "#fff",
                fontWeight: "400px",
                fontSize: "14px",
                background: "#BB6D42",
                marginTop: "10px",
              }}
            >
              Update Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UpdatePassword;
