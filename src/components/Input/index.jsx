import { Container, Inputs } from "./style";

const Input = ({ label, name, register, error, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <Inputs>
        <input type name {...register(name)} {...rest} />
      </Inputs>
      <div>{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

export default Input;
