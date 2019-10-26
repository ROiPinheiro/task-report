import React from 'react';
import useForm from 'react-hook-form';
import { useHistory } from 'react-router';
import { Container } from './styles';

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  function onSubmit(data: object) {
    console.log(data);
    history.push('/home');
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Task Report</h1>

        <label htmlFor="login">
          Login
          <input id="login" name="login" ref={register({ required: true })} />
          <span>{errors.login && errors.login.message}</span>
        </label>

        <label htmlFor="password">
          Senha
          <input
            id="password"
            name="password"
            type="password"
            ref={register({ required: true })}
          />
          <span>{errors.password && errors.password.message}</span>
        </label>

        <button type="submit">Login</button>
      </form>
    </Container>
  );
}
