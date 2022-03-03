import { Button } from "./style";
const Botao = ({ children, backgroundColor = "#59323F", ...rest }) => {
  return (
    <Button {...rest} backgroundColor={backgroundColor}>
      {children}
    </Button>
  );
};
export default Botao;
