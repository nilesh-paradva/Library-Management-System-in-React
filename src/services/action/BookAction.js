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

export const EditBookAction = (data) => {
    return {
        type : "EDIT_BOOK",
        payload: data,
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
            dispatch(GetBookAction(res.data)); 
        }).catch((err) => {
        })
    }
}

export const AddBookThunk = (data) => {
    return (dispatch) => {
        Api.post("/books", data).then((res) => {
            dispatch(AddBookAction(data));
        }).catch((err) => {
        })
    }
}

export const SingleBookThunk = (id) => {
    return (dispatch) => {
        Api.get(`/books/${id}`).then((res) => {
            dispatch(SingleBookAction(res.data));
        }).catch((err) => {
            console.log(err);
        })
    }
}   

export const EditBookThunk = (id, data) => {
    return (dispatch) => {
        Api.put(`/books/${id}`, data).then((res) => {
            console.log("edit-data",res.data);
            dispatch(EditBookAction(res.data));
        }).catch((err) => {
        })
    }
}

export const DeleteBookThunk = (id) => {
    return (dispatch) => {
        Api.delete(`/books/${id}`).then((res) => {
            dispatch(GetBookThunk());
        }).catch((err) => {
        })
    }
}