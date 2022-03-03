import { Switch, Route } from "react-router-dom";
import Cadastrar from "../pages/Cadastrar";
import Login from "../pages/Login";
import PainelDControle from "../pages/PainelDeControle";
import { useState, useEffect } from "react";

const Routes = ({ modalIsOpen, setModalIsOpen, userTec, setUserTec }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:token");

    if (token) {
      return setAuth(true);
    }
  }, [auth]);

  return (
    <Switch>
      <Route exact path="/signup">
        <Cadastrar autenticar={auth} setAutenticar={setAuth} />
      </Route>
      <Route exact path="/">
        <Login auth={auth} setAuth={setAuth} />
      </Route>
      <Route exact path="/dashboard">
        <PainelDControle
          auth={auth}
          setAuth={setAuth}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          userTec={userTec}
          setUserTec={setUserTec}
        />
      </Route>
    </Switch>
  );
};

export default Routes;
