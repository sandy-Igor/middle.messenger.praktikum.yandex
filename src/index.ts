import './style.scss';
import authPage from './pages/auth/index';
import registerPage from './pages/register/index';
import pageNotFound from './pages/errors/pageNotFound';
import pageServerError from './pages/errors/pageServerError';
import changeProfilePage from './pages/changeProfile/index';
import profilePage from './pages/profile/index';
import changePassPage from './pages/changePassword/index';
import chatPage from './pages/chat/index';
import { router } from './router/router';

router
    .use('/', authPage)
    .use('/register', registerPage)
    .use('/pnf', pageNotFound)
    .use('/pse', pageServerError)
    .use('/changeProfilePage', changeProfilePage)
    .use('/profilePage', profilePage)
    .use('/changePassPage', changePassPage)
    .use('/chatPage', chatPage)
    .start()
