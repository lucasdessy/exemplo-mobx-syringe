import { container } from "tsyringe";
import { AuthServiceImpl } from "./infrastructure/auth_service";

export const setupInjection = () => {
    console.log("setupInjection");
    container.register("AuthService", { useClass: AuthServiceImpl });
}