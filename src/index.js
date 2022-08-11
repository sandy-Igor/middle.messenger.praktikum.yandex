import './style.scss';
import authPage from './pages/auth';
import registerPage from './pages/register';
import pageNotFound from './pages/errors/pageNotFound';
import pageServerError from './pages/errors/pageServerError';
import changeProfilePage from './pages/changeProfile';
import profilePage from './pages/profile';
import changePassPage from './pages/changePassword';
import chatPage from './pages/chat';
import { render } from './utils/renderDOM';

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
