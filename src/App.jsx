import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Navbar from "components/Navbar";
import Contacts from "views/Contacts";
import Add from "views/Add";
import Login from "views/Login";
import Register from "views/Register";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="contacts" element={<Contacts />} />
        <Route path="add" element={<Add />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
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
