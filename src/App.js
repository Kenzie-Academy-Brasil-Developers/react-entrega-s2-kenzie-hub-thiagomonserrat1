import Routes from "./routes";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PerfilTecnologia from "./components/PainelTecnologia";
import { useState } from "react";
const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userTec, setUserTec] = useState([]);
  return (
    <>
      {modalIsOpen && (
        <PerfilTecnologia
          setModalIsOpen={setModalIsOpen}
          setUserTec={setUserTec}
          userTec={userTec}
        />
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
      <Routes
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        userTec={userTec}
        setUserTec={setUserTec}
      />
    </>
  );
};
export default App;
