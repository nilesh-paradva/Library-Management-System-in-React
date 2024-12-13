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

export const SingleBookAction = (data) => {
    return {
        type : "SINGLE_BOOK",
        payload : data
    }
}

export const DeleteBookAction = (data) => {
    return {
        type : "DELETE_BOOK",
        payload : data
    }
}


export const GetBookThunk = () => {
    return(dispatch) => {
        Api.get('/books').then((res) => {
            // console.log("books data", res.data);
            dispatch(GetBookAction(res.data)); 
        }).catch((err) => {
            // console.log(err);
        })
    }
}

export const AddBookThunk = (data) => {
    return (dispatch) => {
        Api.post("/books", data).then((res) => {
            // console.log(res.data);
            dispatch(AddBookAction(data));
        }).catch((err) => {
            // console.log(err);
        })
    }
}

export const SingleBookThunk = (id) => {
    return (dispatch) => {
        Api.get(`/books/${id}`).then((res) => {
            // console.log(" single book",res.data);
            dispatch(SingleBookAction(res.data));
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const DeleteBookThunk = (id) => {
    return (dispatch) => {
        Api.delete(`/books/${id}`).then((res) => {
            // console.log(res.data);
            dispatch(GetBookThunk());
        }).catch((err) => {
            // console.log(err);
        })
    }
}