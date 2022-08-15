import { action, makeObservable, observable } from "mobx";
import { container, singleton } from "tsyringe";
import type { AuthService } from "../domain/auth_service";

@singleton()
class AuthMobx { 
    private authService: AuthService = container.resolve<AuthService>("AuthService");

    @observable isLoggedIn = false;
    @observable loading = false;
    @action
    private setLoggedIn(logged: boolean): void {
        this.isLoggedIn = logged;
    }

    @action
    private setLoading(loading: boolean): void {
        this.loading = loading;
    }

    constructor() {
        makeObservable(this);
    }
    

    async login(username: string, password: string): Promise<void> {
        try{
            this.setLoading(true);
        await this.authService.login(username, password);
        if(this.authService.currentUser != null) {
            this.setLoggedIn(true);
            }
        } finally {
            this.setLoading(false);
        }
    }

}
export default AuthMobx;