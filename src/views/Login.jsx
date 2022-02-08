// import PropTypes from "prop-types";
import Section from "components/Section";
import Container from "components/Container";
import LoginForm from "components/LoginForm/LoginForm";
function Login(props) {
  return (
    <Section>
      <Container>
        <LoginForm />
      </Container>
    </Section>
  );
}

// Login.propTypes = {};

export default Login;
