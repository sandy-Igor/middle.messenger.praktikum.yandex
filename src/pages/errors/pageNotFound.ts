import '../../components/errors/errors.scss';
import Errors from '../../components/errors/errors';
import { router } from '../../router/router';

const pageNotFound = new Errors(
  'div',
  {
    error: '404',
    description: 'page not found',
    events: {
      click: (e: Event) => {
        e.preventDefault();
        router.back();
      },
    },
  },
);

export default pageNotFound;
