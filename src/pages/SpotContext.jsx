import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const SpotContext = createContext();

const SpotContextProvider = (props) => {

    const [spots, setSpots] = useState([]);
    useEffect(() => {
        async function loadPosts() {
            const response  = await axios.get('https://fourth-groove-289807.ew.r.appspot.com/dykkerspots', {
                headers: {
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjAyNjgxMTk4LCJleHAiOjE2MDUyNzMxOTh9.3XuUmmVdrbxKn4iEp6-0Wveaa5Ehq5YJr8BXh-Vi2Bk',
                },
            });


            
            console.log("data from google app engine has been fetched")
            const spots = await response.data;
            setSpots(spots);
            console.log(spots);

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