import './style.scss';
import authPage from './pages/auth/index.ts';
import registerPage from './pages/register/index.ts';
import pageNotFound from './pages/errors/pageNotFound.ts';
import pageServerError from './pages/errors/pageServerError.ts';
import changeProfilePage from './pages/changeProfile/index.ts';
import profilePage from './pages/profile/index.ts';
import changePassPage from './pages/changePassword/index.ts';
import chatPage from './pages/chat/index.ts';
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