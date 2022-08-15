import { AuthService } from "../domain/auth_service";

export class AuthServiceImpl implements AuthService{
 user: string | null = null;

    async logout(): Promise<void> {
        this.user = null;
    }
   
    async login(username: string, password: string): Promise<void> {
        console.log("fazendo login...");
        await new Promise(r => setTimeout(r, 2000));
        this.user = "admin";
        console.log("login realizado");

    }
    async currentUser(): Promise<string | null> {
        return this.user;
    }
}