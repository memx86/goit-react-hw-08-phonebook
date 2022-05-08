import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { PropTypes } from "prop-types";
import { token, loggedIn } from "redux/auth";
import { useLoginMutation, useSignupMutation } from "redux/contacts";
import s from "./AuthForm.module.css";

const TYPES = {
  LOGIN: "Login",
  SIGNUP: "Signup",
};
const FIELDS = {
  NAME: "name",
  EMAIL: "email",
  PASSWORD: "password",
};
function AuthForm({ type = TYPES.LOGIN }) {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [signup] = useSignupMutation();
  const dispatch = useDispatch();

  const mutation = type === TYPES.LOGIN ? login : signup;

  const onSubmit = async (data) => {
    try {
      const response = await mutation(data).unwrap();
      dispatch(token(response));
      dispatch(loggedIn());
      navigate("/contacts");
    } catch (error) {
      toast.error(`${type} failed, please try again`);
      resetField(FIELDS.PASSWORD);
    }
  };
  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      {type === TYPES.SIGNUP && (
        <label className={s.label}>
          <input
            {...register(FIELDS.NAME, { required: true })}
            className={s.input}
            defaultValue=""
            placeholder=" "
            autoComplete="username"
          />
          {!errors[FIELDS.NAME] && <span className={s.text}>Name</span>}
          {errors[FIELDS.NAME] && (
            <span className={s.error}>Enter your name please</span>
          )}
        </label>
      )}
      <label className={s.label}>
        <input
          {...register(FIELDS.EMAIL, { required: true })}
          type="email"
          className={s.input}
          defaultValue=""
          placeholder=" "
          autoComplete="email"
        />
        {!errors[FIELDS.EMAIL] && <span className={s.text}>Email</span>}
        {errors[FIELDS.EMAIL] && (
          <span className={s.error}>Enter an email please</span>
        )}
      </label>
      <label className={s.label}>
        <input
          className={s.input}
          {...register(FIELDS.PASSWORD, { required: true, minLength: 7 })}
          type="password"
          defaultValue=""
          placeholder=" "
          autoComplete="current-password"
        />
        {!errors[FIELDS.PASSWORD] && <span className={s.text}>Password</span>}
        {errors[FIELDS.PASSWORD]?.type === "required" && (
          <span className={s.error}>Enter a password please</span>
        )}
        {errors[FIELDS.PASSWORD]?.type === "minLength" && (
          <span className={s.error}>
            Password must be at least 7 characters
          </span>
        )}
      </label>
      <button className={s.btn} type="submit">
        {type}
      </button>
    </form>
  );
}

AuthForm.propTypes = {
  type: PropTypes.string,
};

export default AuthForm;
