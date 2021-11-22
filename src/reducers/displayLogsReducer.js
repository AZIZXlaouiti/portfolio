const initialState = []

export const  displayLogsReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case "DISPLAY":
        return payload

    default:
        return state
    }
}