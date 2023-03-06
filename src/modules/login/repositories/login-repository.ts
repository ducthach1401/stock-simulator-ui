import { loginService } from "../services/login-service";

export class LoginRepository {
  private readonly loginService: loginService = new loginService();

  async login(
    username: string,
    password: string
  ): Promise<Record<string, any>> {
    return await this.loginService.login(username, password);
  }
}
