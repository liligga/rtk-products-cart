const defaultState = {
  todos: [],
};

export const todosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: Date.now(),
        name: action.payload,
        completed: false,
      }
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }
    case "TOGGLE_TODO":
      const theTodo = state.todos.find((todo) => todo.id === action.payload);
      theTodo.completed = !theTodo.completed;
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return theTodo
          }
          return todo
        })
      }
    default:
      return state;
  }
}

/**
 * @param {string} payload
 * @returns {object}
 * @description Action creator для создания нового Todo
 */
export const addTodo = (payload) => {
  return {
    type: "ADD_TODO",
    payload,
  }
}

/**
 * @param {number} payload
 * @returns {object}
 * @description Action creator для удаления Todo
 */
export const deleteTodo = (payload) => {
  return {
    type: "DELETE_TODO",
    payload,
  }
}

/**
 * @param {number} payload
 * @returns {{type: "TOGGLE_TODO", payload: number}}
 * @description Action creator для переключения состояния Todo
 */
export const toggleTodo = (payload) => {
  return {
    type: "TOGGLE_TODO",
    payload,
  }
}
