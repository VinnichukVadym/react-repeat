const Car = ({car, car: {id, brand, price, year}, setId, setUpdateCar}) => {

    return (
        <div>
            <div>ID: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => setUpdateCar(car)}>Update</button>
            <button onClick={() => setId(id)}>Delete</button>
            <br/>
        </div>
    );
};

export {
    Car
}