import React from "react";
import Button from "./UiComponents/Button";
import FormOutlet, {
  FormArea,
  SignInHeading,
  SignInLink,
  SignInPara,
} from "./UiComponents/formOutlet";
import useAuthContext from "../contexts/AuthContext";
import { FormInputField } from "./UiComponents/InputField";

const Login = () => {
  const { password, identifier, setPassword, setIdentifier, handleLogin } =
    useAuthContext();
  return (
    <>
      <>
        <FormArea onSubmit={handleLogin}>
          <SignInHeading>Log in</SignInHeading>
          <FormInputField
            id="identifier"
            type="text"
            value={identifier}
            placeholder="Enter Email/Mobile number/ User name"
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <FormInputField
            id="password"
            type="password"
            placeholder="Password"
            value={[password]}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="border-[1px] w-full">
            Login
          </Button>
        </FormArea>

        <SignInPara>
          New here! <SignInLink to="signin">Create an account</SignInLink>
        </SignInPara>
      </>
    </>
  );
};

export default Login;
