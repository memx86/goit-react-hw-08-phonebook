import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth";
import { useRefreshQuery } from "redux/contacts";
import AuthForm from "components/AuthForm";

function Home() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { data } = useRefreshQuery(null, { skip: !isLoggedIn });
  return (
    <Fragment>
      <h1>Welcome to Contact Book!</h1>
      <div className="grid">
        {!isLoggedIn && (
          <Fragment>
            <p>Create an account or log in to use app</p>
            <AuthForm type="Signup" />
            <Link to="/login">Already have an account?</Link>
          </Fragment>
        )}
        {isLoggedIn && <p>Hi, {data?.name}, glad to see you</p>}
      </div>
    </Fragment>
  );
}

export default Home;
