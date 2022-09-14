import {Cars} from "./components/Cars/Cars";
import {CarForm} from "./components/CarForm/CarForm";
import {useState} from "react";

function App() {
    const [newCar, setNewCar] = useState(null);
    const [updateCar, setUpdateCar] = useState(null);
    const [updatedCar, setUpdatedCar] = useState(null);

    return (
        <div>
            <CarForm setNewCar={setNewCar} updateCar={updateCar} setUpdatedCar={setUpdatedCar} setUpdateCar={setUpdateCar}/>
            <hr/>
            <Cars newCar={newCar} setUpdateCar={setUpdateCar} updatedCar={updatedCar}/>
        </div>
    );
}

export default App;
