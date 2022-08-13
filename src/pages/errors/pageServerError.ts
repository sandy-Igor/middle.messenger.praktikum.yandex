import '../../components/errors/errors.scss';
import Errors from '../../components/errors/errors';

const pageServerError = new Errors(
  'div',
  {
    error: '500',
    description: 'already in fixing...',
    events: {
      click: (e: Event) => {
        e.preventDefault();
        console.log('pse');
      },
    },
  },
);

export default pageServerError;
