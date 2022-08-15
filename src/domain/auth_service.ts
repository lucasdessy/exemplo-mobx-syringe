export interface AuthService {
    login(username: string, password: string): Promise<void>;
    logout(): Promise<void>;
    currentUser(): Promise<string | null>;
}