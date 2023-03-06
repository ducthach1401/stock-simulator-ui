import { Axios } from "axios";

export class DomainService {
  protected readonly axiosService = new Axios();
  protected readonly apiUrl = process.env.REACT_APP_API_URL;
}
