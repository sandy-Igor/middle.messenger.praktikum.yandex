import errorNotFound from '../../components/errors/errors.hbs'
import '../../components/errors/errors.scss'

const data = {
    error: "404",
    description: "page not found"
}

const pageNotFound = () => {
    return errorNotFound(data)
}

export default pageNotFound;