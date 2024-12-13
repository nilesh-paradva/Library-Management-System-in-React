import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBookAction, GetBookThunk } from "../services/action/BookAction";

const ViewBook = () => {

    const { books } = useSelector((state) => state.BookReducer);
    console.log("books", books);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(GetBookThunk());
    }, [])

    return (
        <>
            <h1>{books.map((item) => item.book_title)}</h1>
        </>
    )
}

export default ViewBook