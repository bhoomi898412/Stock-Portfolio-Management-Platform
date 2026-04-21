const LOGIN_URL = import.meta.env.VITE_LOGIN_URL;
const API_URL = import.meta.env.VITE_API_URL;

import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import axios from "axios";

const LOGIN_URL = "http://localhost:3000/login";

const Home = () => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          `${API_URL}/auth/verify`,
          {},
          { withCredentials: true }
        );

        if (!data.status) {
          window.location.href = LOGIN_URL;
          return;
        }

        setIsVerified(true);
      } catch (err) {
        window.location.href = LOGIN_URL;
      }
    };

    verifyUser();
  }, []);

  if (!isVerified) {
    return null;
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
