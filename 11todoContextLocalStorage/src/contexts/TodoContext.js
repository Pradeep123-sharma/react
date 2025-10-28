import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo message",
            completed: false
        },
    ],
    // To addTodo ke liye bss todo chahiye hoga jisko add karna hoga 
    addTodo: (todo) => {},
    // updateTodo mei hum id chahye hoga jise update karna hai aur vo todo jisko kana hai update
    updateTodo: (id, todo) => {},
    removeTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider