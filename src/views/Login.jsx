import { Fragment } from "react";
import GoogleButton from "components/GoogleButton";
import AuthForm from "components/AuthForm";

function Login() {
  return (
    <Fragment>
      <GoogleButton />
      <AuthForm />
    </Fragment>
  );
}

export default Login;
