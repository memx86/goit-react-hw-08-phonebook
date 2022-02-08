// import PropTypes from "prop-types";
import Section from "components/Section";
import Container from "components/Container";
import RegisterForm from "components/RegisterForm";
function Register(props) {
  return (
    <Section>
      <Container>
        <RegisterForm />
      </Container>
    </Section>
  );
}

// Register.propTypes = {};

export default Register;
