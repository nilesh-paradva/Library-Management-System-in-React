const initialState = {
    books: [],
    book: null,
    isSuccess: false,
    // isLoading: false,
    // isError: false
}

const BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return { ...state, isSuccess: true }

        case "GET_BOOK":
            return { ...state, books: action.payload, isSuccess: false }



        default:
            return state
    }
}

export default BookReducer