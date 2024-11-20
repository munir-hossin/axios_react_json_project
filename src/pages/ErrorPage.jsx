
import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {

    const error = useRouteError();
    console.log(error);
    

    return (
        <div>
            <h5>This is error pages </h5>
            <p>why are you here </p>

            <div>
                <h2 className='2xl text-red-500'>Status: {error.status} | Message: {error.statusText}</h2>
                <Link to="/"> Click here to  Go home </Link>
            </div>
        </div>
    );
}

export default ErrorPage;