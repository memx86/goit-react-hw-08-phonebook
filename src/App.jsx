import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useRefreshQuery, loggedIn, getToken } from "redux/auth";
import Navbar from "components/Navbar";
import Home from "views/Home";
import Contacts from "views/Contacts";
import Add from "views/Add";
import Login from "views/Login";
import Register from "views/Register";

function App() {
  const token = useSelector(getToken);
  const { isSuccess } = useRefreshQuery(null, { skip: !token });
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) dispatch(loggedIn());
  }, [dispatch, isSuccess]);

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="add" element={<Add />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Routes>
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
