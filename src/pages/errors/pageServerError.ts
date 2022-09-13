import '../../components/errors/errors.scss';
import Errors from '../../components/errors/errors';
import { router } from '../../router/router';

const pageServerError = new Errors(
    'div',
    {
        error: '500',
        description: 'already in fixing...',
        events: {
            click: (e: Event) => {
                e.preventDefault();
                router.back();
            }
        }
    }
);

export default pageServerError;
