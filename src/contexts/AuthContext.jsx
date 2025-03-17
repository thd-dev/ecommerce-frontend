import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [role, setRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_SERVER}/user/signin`,
        {
          method: "POST",
          body: JSON.stringify({
            fname,
            lname,
            userName,
            email,
            phoneno: phoneNo,
            password,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok)
        return console.log("Can't sign up, try again next time");
      console.log("sign up successfully");
      setFname("");
      setLname("");
      setEmail("");
      setPhoneNo("");
      setPassword("");
      const data = response.json();
      window.location.href = data.redirectUrl;
    } catch (error) {
      console.error("Backend error, ", error);
    }
  };

  useEffect(() => {
    (async () => {
      const res = await fetch(`${import.meta.env.VITE_APP_SERVER}/user`, {
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        // console.log(data.user);
        if (data.user) {
          const user = data.user;
          setIsLoggedIn(true);
          setFname(user.fname);
          setLname(user.lname);
          setEmail(user.email);
          setPhoneNo(user.phoneno);
          setRole(user.role);
        }
      }
      setIsLoading(false);
    })();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_SERVER}/user/login`,
        {
          method: "POST",
          body: JSON.stringify({ identifier, password }),
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      if (!response.ok) return console.log("Can't login try again next time");
      const data = await response.json();
      setPassword("");
      setIdentifier("");
      setIsLoggedIn(true);
      window.location.href = data.redirectUrl;
    } catch (error) {
      console.log("Backend error, ", error);
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${import.meta.env.VITE_APP_SERVER}/user/logout`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (res.ok) {
        console.log("logout");
        setIsLoggedIn(false);
        window.location.reload();
      } else {
        console.log("cant");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        fname,
        setFname,
        lname,
        setLname,
        userName,
        setUserName,
        email,
        setEmail,
        phoneNo,
        setPhoneNo,
        password,
        setPassword,
        identifier,
        setIdentifier,
        isLoggedIn,
        role,
        isLoading,
        handleLogout,
        setIsLoggedIn,
        handleRegister,
        handleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}
