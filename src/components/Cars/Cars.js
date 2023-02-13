import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import {Car} from "../Car/Car";
import {useSearchParams} from "react-router-dom";
import {Button} from "../Button/Button";

const Cars = () => {

    const dispatch = useDispatch();
    const {cars, prev, next, totalPages} = useSelector(state => state.cars);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(carActions.getAll({page: query.get('page')}));
    }, [dispatch, query, setQuery])


    let arr = []
    for (let i = 0; i < totalPages; i++) {
        arr.push(i + 1)
    }

    useEffect(() => {
    }, [cars])

    return (
        <div>
            {
                totalPages &&
                <div>
                    <button disabled={!prev} onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>prev
                    </button>

                    {arr.map(value => <Button key={value} n={value} setQuery={setQuery}/>)}

                    <button disabled={!next} onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>next
                    </button>
                </div>
            }

            {cars.map(value => <Car key={value.id} car={value}/>)}
        </div>
    );
};

export {
    Cars
}