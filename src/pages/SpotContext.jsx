import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const SpotContext = createContext();

const SpotContextProvider = (props) => {

    const [spots, setSpots] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadPosts() {
            const response = await axios.get('https://fourth-groove-289807.ew.r.appspot.com/dykkerspots', {
                headers: {
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjA1ODEwNjczLCJleHAiOjE2MDg0MDI2NzN9.Rlv0FwTV4MCgwxNW9VN_ETGvTc5A_EUHAPz7ivU4CCA',
                },
            })
                .then(response => {
                    // Handle success.
                    console.log('Data: ', response.data);
                    console.log("data from google app engine has been fetched")
                    const spots = response.data;
                    setSpots(spots);
                    console.log(spots);
                    setLoading(true)
                })
                .catch(error => {
                    // Handle error.
                    console.log('An error occurred:', error.response);
                });

        }

        loadPosts();

    }, [])


    return (
        <SpotContext.Provider value={{ spots }}>
            {props.children}
        </SpotContext.Provider>
    )
}

export default SpotContextProvider

////////////////////////////////////////////////
/// To get the jwt token for strapi ////////////
////////////////////////////////////////////////
// const { data } = await axios.post('http://localhost:1337/auth/local', {
//   identifier: 'reader@strapi.io',
//   password: 'strapi',
// });

// console.log(data);

// -> replace localhost:1337/ with correct url
// -> replace id and pass with authenticated user