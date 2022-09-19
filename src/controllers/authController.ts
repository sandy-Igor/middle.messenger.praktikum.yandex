import { AuthApi, Signin, Signup } from '../api/auth-api';
import { router } from '../router/router';

const authApi = new AuthApi();

class AuthController {
  public singin(data: Signin) {
    return authApi.signin(data).then((data: XMLHttpRequest) => {
      if (data.status === 200) router.go('/chatPage');
    });
  }

  public signup(data: Signup) {
    return authApi.signup(data).then((data: XMLHttpRequest) => {
      if (data.status === 200) router.go('/chatPage');
    });
  }
}

export default new AuthController();
