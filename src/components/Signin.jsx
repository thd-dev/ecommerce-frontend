import Button from "./UiComponents/Button";
import FormOutlet, {
  FormArea,
  SignInHeading,
  SignInLink,
  SignInPara,
} from "./UiComponents/formOutlet";
import useAuthContext from "../contexts/AuthContext";
import { FormInputField } from "./UiComponents/InputField";

const Signin = () => {
  const {
    fname,
    setFname,
    lname,
    setLname,
    email,
    setEmail,
    password,
    setPassword,
    handleRegister,
  } = useAuthContext();
  return (
    <>
      <FormArea onSubmit={handleRegister}>
        <SignInHeading>Sign up</SignInHeading>
        <FormInputField
          placeholder="First Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          type="text"
        />
        <FormInputField
          placeholder="Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          type="text"
        />
        <FormInputField
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <FormInputField
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <Button type="submit" className="border-[1px] w-full">
          Create an account
        </Button>
      </FormArea>
      <SignInPara>
        Existing User? <SignInLink to="../">Log in</SignInLink>
      </SignInPara>
    </>
  );
};

export default Signin;
