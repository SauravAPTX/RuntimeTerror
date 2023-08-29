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

function SignUpForm() {
  const [inputArray, setInputArray] = useState([]);

  const handleInputChange = (index, value) => {
    const newArray = [...inputArray];
    newArray[index] = value;
    setInputArray(newArray);
  };


  const handleSignUpClick = () => {
    // Logic to process the inputArray, like sending it to a server
    console.log(inputArray);
  };

// export default function App() {
//   const [selected, setSelected] = React.useState("login");

  return (
    
    <form className="flex flex-col gap-4 h-[300px]">
      <Input
        isRequired
        label="Name"
        placeholder="Enter your name"
        type="text" // Change this to "text" instead of "password"
        onChange={(e) => handleInputChange(0, e.target.value)} // Use index 0 for the name field
      />
      <Input
        isRequired
        label="Email"
        placeholder="Enter your email"
        type="email"
        onChange={(e) => handleInputChange(1, e.target.value)} // Use index 1 for the email field
      />
      <Input
        isRequired
        label="Password"
        placeholder="Enter your password"
        type="password"
        onChange={(e) => handleInputChange(2, e.target.value)} // Use index 2 for the password field
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
    try {
      const response = await axios.get(
        `http://localhost:3001/users?email=${email}&password=${password}`
      );

      if (response.data.length > 0) {
        setLoginMessage("Congratulations! Login successful.");
        // You can perform further actions upon successful login
      } else {
        setLoginMessage("Login failed: Invalid credentials");
        // You can display an error message to the user
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <form className="flex flex-col gap-4">
      <Input
        isRequired
        label="Email"
        placeholder="Enter your email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        isRequired
        label="Password"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p className="text-center text-small">
        Need to create an account?{" "}
        <Link size="sm" onPress={() => setSelected("sign-up")}>
          Sign up
        </Link>
      </p>
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
              <Tab key="sign-up" title="Sign up">
                <SignUpForm />
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

