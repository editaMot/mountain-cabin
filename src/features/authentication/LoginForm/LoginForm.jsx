import { useState } from "react";
import Button from "../../../ui/Button";
import Form from "../../../ui/Form";
import FormRow from "../../../ui/FormRow";
import Input from "../../../ui/Input";
import Spinner from "../../../ui/Spinner";
import { useLogin } from "../useLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("demo@demo.com");
  const [password, setPassword] = useState("pass1234");
  const { login, isLoading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit} login>
      <FormRow label="Email" vertical>
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="Password" vertical>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow vertical>
        <Button size="large">{!isLoading ? "Log in" : <Spinner />}</Button>
      </FormRow>
    </Form>
  );
};

export default LoginForm;
