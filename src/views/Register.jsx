import { Fragment } from "react";
import GoogleButton from "components/GoogleButton";
import AuthForm from "components/AuthForm";

function Register() {
  return (
    <Fragment>
      <GoogleButton type="Signup" />
      <AuthForm type="Signup" />
    </Fragment>
  );
}

export default Register;
