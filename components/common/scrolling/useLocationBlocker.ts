import useHistory from 'next/router';
import { useEffect } from 'react';

const useLocationBlocker = () => {
    /**
     * Prevents react-router from pushing the same
     * page to the history twice which leads to
     * multiple clicks on the back icon of the browser
     * being necessary to go back into the history.
     */
    useEffect(() => {
        // history.block((location, action) => false);
        // {
        //     if (action !== "PUSH" || getLocationId(location) !== getLocationId(history.location)) {
        //         return window.confirm("Navigate Back?");
        //     }
        //     return true;
        // });
    }, []);
};

const getLocationId = ({ pathname, search, hash }) => {
    return pathname + (search ? '?' + search : '') + (hash ? '#' + hash : '');
};

export default useLocationBlocker;
