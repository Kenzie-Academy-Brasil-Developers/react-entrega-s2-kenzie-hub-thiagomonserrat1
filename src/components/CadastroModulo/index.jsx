import { Container, Sessao } from "./style";

const InputSection = ({ label, register, name, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>
      <Sessao {...register(name)} {...rest}>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)">
          Quarto módulo (Backend Avançado)
        </option>
      </Sessao>
    </Container>
  );
};

export default InputSection;
