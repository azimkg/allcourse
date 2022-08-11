import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SignIn from "../../components/SignIn/SignIn";

const AuthorizationPage = () => {
  return (
    <>
      <Navbar />
      <SignIn />
      <Footer />
    </>
  );
};

export default AuthorizationPage;
