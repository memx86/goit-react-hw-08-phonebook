import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import { HmacSHA512 } from "crypto-js";
import { PropTypes } from "prop-types";
import { token, loggedIn, getIsLoggedIn } from "redux/auth";
import { useLoginMutation, useSignupMutation } from "redux/contacts";
import Button from "components/Button";

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const SECRET = process.env.REACT_APP_JWT_SECRET;
const TYPES = {
  LOGIN: "Login",
  SIGNUP: "Signup",
};

function GoogleButton({ type = TYPES.LOGIN, className }) {
  const [gsiScriptLoaded, setGsiScriptLoaded] = useState(false);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [signup] = useSignupMutation();
  const dispatch = useDispatch();

  const initializeGsi = () => {
    if (!window.google || gsiScriptLoaded) return;

    setGsiScriptLoaded(true);
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleSignIn,
    });
  };

  const mutation = type === TYPES.LOGIN ? login : signup;

  const handleData = async (data) => {
    try {
      const response = await mutation(data).unwrap();
      dispatch(token(response));
      dispatch(loggedIn());
      navigate("/contacts");
    } catch (error) {
      toast.error(`${type} failed, please try again`);
    }
  };

  const handleGoogleSignIn = async (res) => {
    if (!res.clientId || !res.credential) return;
    const token = res.credential;
    const { name, email } = jwt_decode(token);
    const password = HmacSHA512(email, SECRET).toString();
    const data =
      type === TYPES.LOGIN ? { email, password } : { name, email, password };

    await handleData(data);
  };

  useEffect(() => {
    if (isLoggedIn || gsiScriptLoaded) return;

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.onload = initializeGsi;
    script.async = true;
    script.id = "google-client-script";
    document.querySelector("body")?.appendChild(script);

    return () => {
      window.google?.accounts.id.cancel();
      document.getElementById("google-client-script")?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const googleId = () => window.google?.accounts.id.prompt();

  return (
    <Button
      text={`${type} with Google`}
      onClick={googleId}
      className={className}
    />
  );
}

GoogleButton.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

export default GoogleButton;
