import { Form, Input, Button, Checkbox, Spin } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
import "./App.css"
import { LoadingOutlined } from '@ant-design/icons';
function App() {
  const [response, setResponse] = useState("")
  const antIcon = <LoadingOutlined style={{ color:"white",fontSize: 24 }} spin />;
  const onFinish = (values) => {
    setResponse("Please wait")
    var data = {
      email: values.email,
      password: values.password
    }
    
    fetch('https://reqres.in/api/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      setResponse(JSON.stringify(data))
    })
  };

  return (
    <div className="App" >
      <div className="header">
        <div className="header__title">
          ATools
          <span style={{ color: "#fb8500" }}>.</span>
        </div>
        <div>
          <Button
            className="header__button"
            size="large"
            style={{
              marginRight: "10px",
              backgroundColor: "#023047",
              color: "white"
            }}
          >Start Free Trial</Button>
          <Button
            className="header__button"
            size="large"
            style={{
              backgroundColor: "#fb8500",
              color: "white"
            }}>
            Login
          </Button>
        </div>
      </div>
      <div className="mainContent">
        <div className="loginform">
          <Form
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          // onFinishFailed=onFinishFailed
          >
            <div className="loginform__title">
              Welcome Back
            </div>
            
            <p className="loginform__subtitle">
              Sub-title text goes here<br/>
              {response}
            </p>
            <Form.Item
              name="email"
              style={{ marginBottom: "10px" }}
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input placeholder='Email Address*' size="large" />
            </Form.Item>

            <Form.Item
              name="password"
              style={{ marginBottom: "10px" }}
              rules={[
                {
                  required: false,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password
                placeholder='Password*'
                size="large"
                iconRender={(v) => null} />

            </Form.Item>
            <Form.Item style={{
              marginBottom: "10px"
            }}>
              <Button
                className="loginform__submitBtn"
                style={{
                  marginBottom: "10px",
                  backgroundColor: "#023047",
                  color: "white",
                  fontSize: "13px",
                  width: "100%",
                  margin: "0px"
                }}
                htmlType="submit"
                size="large">
                {response=="Please wait"? 
                <Spin size="small" indicator={antIcon}/>:"Login"}
              </Button>
            </Form.Item>
            <div style={{
              display: 'flex',
              width: "100%",
              justifyContent: 'space-between',
              flexWrap: 'wrap'
            }}>
              <div style={{ height: "24px" }}>
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 0,
                    span: 16,
                  }}
                >
                  <Checkbox style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    width: "150px"
                  }} >Remember Password</Checkbox>
                </Form.Item>
              </div>
              <div>
                <a style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  color: "#023047"
                }} href="#">Forget Password?</a>
              </div>
            </div>

          </Form>
        </div>
        <div className="loginform__blueBg">
        </div>
      </div>
    </div>
  );
}

export default App;
