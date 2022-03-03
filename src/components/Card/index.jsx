import { Container } from "./style";

const Card = ({ titulo, nivel }) => {
  return (
    <Container>
      <h3>{titulo}</h3>
      <span>{nivel}</span>
    </Container>
  );
};

export default Card;
