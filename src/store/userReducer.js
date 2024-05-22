const defaultState = {
    user: {
        name: "",
        email: "",
        phone: "",
    },
};

// action - действие
// это просто объект, у которого есть поле type
// например { type: "INCREMENT_COUNTER" }
export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CHANGE_NAME": {
            // dispatch({ type: "CHANGE_NAME", payload: "Alex" });
            return { ...state, name: action.payload };
        }
        case "CHANGE_EMAIL": {
            // dispatch({ type: "CHANGE_EMAIL", payload: "alex@ya.ru" });
            return { ...state, email: action.payload };
        }
        case "CHANGE_PHONE": {
            // dispatch({ type: "CHANGE_PHONE", payload: "+7 999 999 99 99" });
            return { ...state, phone: action.payload };
        }
        default:
            return state;
    }
    return state;
};
