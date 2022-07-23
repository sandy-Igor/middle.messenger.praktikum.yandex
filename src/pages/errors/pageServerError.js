import errorServer from '../../components/errors/errors.hbs'
import '../../components/errors/errors.scss'

const data = {
    error: "500",
    description: "already in fixing..."
}

const pageServerError = () => {
    return errorServer(data)
}

export default pageServerError;