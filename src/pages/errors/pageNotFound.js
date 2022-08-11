import '../../components/errors/errors.scss';
import Errors from '../../components/errors/errors';

const pageNotFound = new Errors(
  'div',
  {
    error: '404',
    description: 'page not found',
    events: {
      click: (e) => {
        e.preventDefault();
        console.log('pnf');
      },
    },
  },
);

// const pageNotFound = () => {
//     return errorNotFound(data)
// }

export default pageNotFound;
