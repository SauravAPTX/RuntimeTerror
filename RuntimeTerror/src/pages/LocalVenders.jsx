import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Input,
  Link,
  Button,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import '../styles/Login.css';

function SignUpForm() {
  const [inputArray, setInputArray] = useState([]);

  const handleInputChange = (index, value) => {
    const newArray = [...inputArray];
    newArray[index] = value;
    setInputArray(newArray);
  };


  const handleSignUpClick = () => {
    console.log(inputArray);
  };
  return (
    
    <form className="flex flex-col gap-4 h-[300px]">
      <Input
        isRequired
        label="Name"
        placeholder="Enter your name"
        type="text" 
        onChange={(e) => handleInputChange(0, e.target.value)} 
      />
      <Input
        isRequired
        label="Email"
        placeholder="Enter your email"
        type="email"
        onChange={(e) => handleInputChange(1, e.target.value)}
      />
      <Input
        isRequired
        label="Password"
        placeholder="Enter your password"
        type="password"
        onChange={(e) => handleInputChange(2, e.target.value)}
      />
      <p className="text-center text-small">
        Already have an account?{" "}
        <Link size="sm" onPress={() => setSelected("login")}>
          Login
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" onClick={handleSignUpClick}>
          Sign up
        </Button>
      </div>
    </form>
  );
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const handleLoginClick = async () => {
   if (email == "runtime@gmail.com" && password == 1234) {
      setLoginMessage("Congratulations! You have successfully logged in.");
    } else {
      setLoginMessage("Error: Invalid email or password.");
    }
  };

  return (
    <form className="flex flex-col gap-4">
      <br/>
      <Input
        isRequired
        label="Email"
        placeholder="Enter your email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/>
      <Input
        isRequired
        label="Password"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      {/* <p className="text-center text-small">
        Need to create an account?{" "}
        <Link size="sm" onPress={() => setSelected("sign-up")}>
          Sign up
        </Link>
      </p> */}
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary" onClick={handleLoginClick}>
          Login
        </Button>
      </div>
      {loginMessage && <p className="text-center">{loginMessage}</p>}
    </form>
  );
}

export default function App() {
  const [selected, setSelected] = React.useState("login");

  return (
    <div className="image">
      <div className="flex flex-col w-full">
        <Card className="max-w-full w-[340px] h-[400px]">
          <CardBody className="overflow-hidden">
            <Tabs
              fullWidth
              size="md"
              aria-label="Tabs form"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="login" title="Login">
                <LoginForm/>
              </Tab>
              {/* <Tab key="sign-up" title="Sign up">
                <SignUpForm />
              </Tab> */}
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}