import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useRefreshQuery, loggedIn, getToken } from "redux/auth";
import Navbar from "components/Navbar";
import PublicRoute from "components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import Home from "views/Home";
import Contacts from "views/Contacts";
import Add from "views/Add";
import Login from "views/Login";
import Register from "views/Register";
import Loader from "components/Loader";

function App() {
  const token = useSelector(getToken);
  const { isSuccess, isFetching } = useRefreshQuery(null, { skip: !token });
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) dispatch(loggedIn());
  }, [dispatch, isSuccess]);
  if (isFetching) return <div></div>;
  return (
    <Fragment>
      <Navbar />
      {isFetching ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="add"
            element={
              <PrivateRoute>
                <Add />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
}

export default App;
