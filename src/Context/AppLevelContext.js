import React, { createContext, useState, useReducer } from "react";
const AppLevelContext = createContext()

export const AppLevelProvider = ({ children }) => {
    const [input, setInput] = useState({
        title: "",
        description: ""
    })


    const [search, setSearch] = useState('')

    const filtered = (e) => {
        setSearch(e.target.value)
    }

    

    const initialState = {
        status: "",
        todos: [],
        loading: true
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "SUCCESS_TODOS":
                return {
                    ...state,
                    status: action.status,
                    todos: action.payload,
                    loading: false,
                }

            case "DELETE_TODO":
                return {
                    ...state,
                    status: action.status,
                    todos: action.payload,
                    loading: false,
                }

            default:
                return state.todos
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppLevelContext.Provider value={{ input, setInput, state, dispatch, search, setSearch, filtered }}>{children}</AppLevelContext.Provider>
    )
}



export default AppLevelContext