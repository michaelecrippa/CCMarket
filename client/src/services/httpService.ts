import { HttpError } from '../errors/httpError'
import { authService } from '../services/authService';
import { REACT_APP_SERVER_ADDRESS as serverURL } from '../config/index';

class HttpService {
  async get<T>(path: string) { 
    return this.request<T>(path, 'get');
  }

  async post<T>(path: string, body: Record<string, any>) {
    return this.request<T>(path, 'post', body);
  }

  private async request<T>(path: string, method: string, body?: Record<string, any>){
    const userToken = authService.storedUser?.token;

    const response = await fetch(`${serverURL}/${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(userToken ? {'Authorization': `Bearer ${userToken}`} : undefined),
      },
      body: body && JSON.stringify(body),
    }); 
    
    if(response.status < 200 || response.status >= 300){
        let responseBody = await response.text();
        try {
            responseBody = JSON.parse(responseBody);
        } catch (_error) {
          
        }
        throw new HttpError(response, responseBody);
    }
    const responseBody: T = await response.json();

    return responseBody;
  }
}

export const httpService = new HttpService();