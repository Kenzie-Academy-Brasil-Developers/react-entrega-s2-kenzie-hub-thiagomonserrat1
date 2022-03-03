import {
  Container,
  Cabecalho,
  ListaTecnologia,
  CabecalhoTecnologia,
  SessaoTecnologia,
  SessaoUsuario,
} from "./style";
import Card from "../../components/Card";
import Logo from "../../assets/logo.svg";
import { HiPlus } from "react-icons/hi";
import { useHistory, Redirect } from "react-router-dom";
import api from "../../services/api";
import { useEffect } from "react";
const PainelDControle = ({
  modalIsOpen,
  setModalIsOpen,
  userTec,
  setAuth,
  auth,
  setUserTec,
}) => {
  const userStorage = JSON.parse(localStorage.getItem("@KenzieHub:user"));
  const history = useHistory();
  const handleModalOpen = () => {
    setModalIsOpen(true);
  };
  const handleTechs = async () => {
    const response = await api.get(`/users/${userStorage.id}`);
    setUserTec(response.data.techs);
  };
  useEffect(() => {
    handleTechs();
  }, [userTec]);
  const handleLogout = () => {
    setAuth(false);
    localStorage.clear();
    history.push("/");
  };
  if (!auth) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <div>
        <Cabecalho>
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <button onClick={handleLogout}>Sair</button>
        </Cabecalho>
        <hr />
        <SessaoUsuario>
          <h2>{userStorage.name}</h2>
          <span>{userStorage.course_module}</span>
        </SessaoUsuario>
        <hr />
        <SessaoTecnologia>
          <CabecalhoTecnologia>
            <h3>Tecnologias</h3>
            <button onClick={() => handleModalOpen()}>
              <HiPlus />
            </button>
          </CabecalhoTecnologia>
          <ListaTecnologia>
            {userTec.map((tec) => {
              return (
                <Card titulo={tec.title} nivel={tec.status} key={tec.id} />
              );
            })}
          </ListaTecnologia>
        </SessaoTecnologia>
      </div>
    </Container>
  );
};
export default PainelDControle;
