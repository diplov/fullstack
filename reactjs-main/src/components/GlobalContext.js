import { createContext } from "react";
import React from 'react'

export const GlobalContext = createContext()

const GlobalContextProvider = (props) => {
    <GlobalContext.Provider value="This information is from global context.">
        {props.children}
    </GlobalContext.Provider>
}

export default GlobalContextProvider