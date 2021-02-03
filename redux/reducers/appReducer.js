const initialState = {
    loggedin: false,
    user: null,
    errors: {}
}

export default function appReducer(state=initialState, action) {
    const { type, payload } = action

    switch(type) {
        case "log_in":
            return {
                ...state,
                loggedin: true,
                user: payload,
                errors: {}
            }

        case "log_out": 
            return { 
                ...state,
                loggedin: false,
                user: null,
                errors: {}
            }

        case "error":
            return {
                ...state, errors: payload
            }

        default:
            return state;
    }
}