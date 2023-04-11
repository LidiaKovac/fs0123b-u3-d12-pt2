import { SET_TODO } from "../actions"

//* passaggio 1. creare l'initialState => diamo un' idea di come sara' lo state
const initialState = {
    todo: {
        content: []
    }
}
//* passaggio 2. creare il reducer con lo switch e il default
const todoReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_TODO: 
            return {
                ...state, 
                todo: {
                    ...state.todo,
                    content: action.payload
                }
            }
        default: return state
    }
}

//* passaggio 3. export il reducer
export default todoReducer