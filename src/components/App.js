// create your App component here
import React, {useEffect, useState} from "react"

function App() {
    const [images, setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setImages(data.message);
                setIsLoaded(true);
            });
    }, []);

    if (!isLoaded) return <p>Loading...</p>

    return (
        <img alt="A Random Dog" src={images}/>
    )
}

export default App;