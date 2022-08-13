import './style.scss';
import authPage from './pages/auth/index.ts';
import registerPage from './pages/register/index.ts';
import pageNotFound from './pages/errors/pageNotFound.ts';
import pageServerError from './pages/errors/pageServerError.ts';
import changeProfilePage from './pages/changeProfile/index.ts';
import profilePage from './pages/profile/index.ts';
import changePassPage from './pages/changePassword/index.ts';
import chatPage from './pages/chat/index.ts';
import { render } from './utils/renderDOM.ts';

let content = authPage;

window.addEventListener('load', () => {
  const path = window.location.pathname;
  switch (path) {
    case '/register': content = registerPage;
      break;
    case '/pnf': content = pageNotFound;
      break;
    case '/pse': content = pageServerError;
      break;
    case '/changeProfilePage': content = changeProfilePage;
      break;
    case '/profilePage': content = profilePage;
      break;
    case '/changePassPage': content = changePassPage;
      break;
    case '/chatPage': content = chatPage;
  }
  return render('.app', content);
});
