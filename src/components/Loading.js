import { FaSpinner } from 'react-icons/fa';

export const LoadingComponent = () => {
    return(
        <FaSpinner className="spin-animation" style={{zIndex:"9999"}} />
    );
}