import { Api } from "../../api/Api"

export const AddBookAction = (data) => {
    return {
        type : "ADD_BOOK",
        payload : data
    }
}

export const GetBookAction = (data) => {
    return {
        type : "GET_BOOK",
        payload : data
    }
}


export const GetBookThunk = () => {
    return(dispatch) => {
        Api.get('/books').then((res) => {
            // console.log("books data", res.data);
            dispatch(GetBookAction(res.data)); 
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const AddBookThunk = (data) => {
    return (dispatch) => {
        Api.post("/books", data).then((res) => {
            console.log(res.data);
            dispatch(AddBookAction(data));
        }).catch((err) => {
            console.log(err);
        })
    }
}