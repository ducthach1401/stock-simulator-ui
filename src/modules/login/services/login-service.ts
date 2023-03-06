import { DomainService } from "../../../core/utils/domain-service";

export class loginService extends DomainService {
  constructor() {
    super();
  }

  async login(
    username: string,
    password: string
  ): Promise<Record<string, any>> {
    const response = await this.axiosService.request({
      method: "POST",
      baseURL: this.apiUrl,
      url: "/auth/login",
      data: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    console.log(response.data);

    return {};
  }
}
