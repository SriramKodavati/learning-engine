import React, { useReducer, useEffect } from 'react';
import { createContext } from 'react';

export const AgriContext = createContext();

export const AgriProvider = (props) => {

    const INITIAL_STATE = { 
        // Workers: [],
        // Tobacco: {},
        // Paddy: {},
        // Attendance : {}
    }

    const reducer = (states, action) => {

        let { type, data } = action;

        switch (type) {
            case 'Fetch_Success': {
                console.log(data);
                return {
                    //...state,...data
                    states : Object.assign(states,data)
                }
            }
        }
    }

    const [states, dispatch] = useReducer(reducer, INITIAL_STATE);
     //const { Workers, Tobacco, Paddy, Attendance } = state;

    useEffect(() => {
        fetch('https://jsonblob.com/api/178d2a30-c736-11ea-bf3d-7189876a01b3').then(response => response.json())
            .then(json => {
                dispatch({ type: 'Fetch_Success', data:{ ...json} });
                console.log(states);
            })
    }, [])

    return (
        <div>
            {console.log("AgriContext Loading")}
            <AgriContext.Provider value={states }>
                {props.children}
            </AgriContext.Provider>
        </div>
    );
}
