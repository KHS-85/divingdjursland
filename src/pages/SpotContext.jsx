import React, {createContext, useState, useEffect} from 'react'

export const SpotContext = createContext();

const SpotContextProvider = (props) => {

    const [spots, setSpots] = useState([]);
    useEffect(() => {
        async function loadPosts() {
            const response = await fetch('http://localhost:1337/dykkerspots');
            if(!response.ok) {
                // oups! something went wrong
                return;
            }
    
            const spots = await response.json();
            setSpots(spots);
        }
    
        loadPosts();
   }, [])


    return (
        <SpotContext.Provider value={{spots}}>
            {props.children}
        </SpotContext.Provider>
    )
}

export default SpotContextProvider