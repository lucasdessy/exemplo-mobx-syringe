import { observer } from "mobx-react";
import React from "react";
import { container } from "tsyringe";
import AuthMobx from "../application/auth_mobx";


@observer
class HomePage extends React.Component {
    authMobx = container.resolve(AuthMobx);
    render(): React.ReactNode {
        return (
            <div>
                <h1>Home Page</h1>
                <span>{this.authMobx.isLoggedIn ? "Logado" : "Não Logado"}</span>
                <div>{this.authMobx.loading ? "Carregando..." : ""}</div>
                <button onClick={()=>this.authMobx.login("teste","teste")}>Login</button>
            </div>
        );
    }
}
export default HomePage;