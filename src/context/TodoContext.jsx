import React, { createContext, useContext } from 'react'

const todocontext = createContext()

export function Todocontext(props) {
    const todo = ["New ToDo","Hello"]
    return (
        <todocontext.Provider value={todo}>
            {props.children}
        </todocontext.Provider>
    )
}
export const useTodo = () =>{
    return useContext(todocontext)
}