import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

const Button = ({n, setQuery}) => {

    const [isActive, setIsActive] = useState(false);
    const [page] = useSearchParams();

    useEffect(() => {
        setIsActive(false);

        if (+page.get('page') === n) {
            setIsActive(true);
        }

    }, [page, setIsActive, n])

    return (
        <button style={{
            backgroundColor: isActive ? 'salmon' : '',
            color: isActive ? 'white' : '',
        }}
                onClick={() => setQuery(({page: n}))}>
            {n}
        </button>
    );
};

export {
    Button
}