// create your App component here
import {React, useState, useEffect} from "react";

function App() {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(dog => setDogs(dog.message));
    },[]);

    if (dogs.length === 0) return <p>Loading...</p>

    return <img src={dogs} alt="A Random Dog" />
}

export default App;