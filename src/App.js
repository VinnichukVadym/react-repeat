import {CarForm, Cars} from "./components";
import {useState} from "react";

const App = () => {

    let [newCars, setNewCars] = useState(null);
    let [updateCar, setUpdateCar] = useState(null);
    let [updatedCar, setUpdatedCar] = useState(null);


    return (
        <div>
            <Cars  newCars={newCars} setUpdateCar={setUpdateCar} updatedCar={updatedCar}/>
            <hr/>
            <CarForm setNewCars={setNewCars} updateCar={updateCar} setUpdatedCar={setUpdatedCar}/>
            <br/>
        </div>
    );
};

export default App;