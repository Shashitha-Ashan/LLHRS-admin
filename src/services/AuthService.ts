import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class AuthService {
  private static instance: AuthService | null = null;

  private api: AxiosInstance;

  private token: string | null = null;

  private constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3000/api/v1",
    });
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public setToken(token: string): void {
    this.token = token;
    this.api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  public clearToken(): void {
    this.token = null;
    delete this.api.defaults.headers.common["Authorization"];
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.api.get<T>(url, config);
      return response.data;
    } catch (error) {
      console.error("GET request failed:", error);
      throw error;
    }
  }
  public async post<T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this.api.post<T>(url, data, config);
      return response.data;
    } catch (error) {
      console.error("POST request failed:", error);
      throw error;
    }
  }
}

export default AuthService;
