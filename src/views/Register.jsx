import Section from "components/Section";
import Container from "components/Container";
import AuthForm from "components/AuthForm";

function Register() {
  return (
    <Section>
      <Container>
        <AuthForm type="Signup" />
      </Container>
    </Section>
  );
}

export default Register;
