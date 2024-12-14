import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleBookThunk } from "../services/action/BookAction";
import { Link, useParams } from "react-router";
import { use } from "react";
import { Col, Container, Row } from "react-bootstrap";

const SingleBook = () => {

    const { book } = useSelector((state) => state.BookReducer);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        id && dispatch(SingleBookThunk(id));
    }, [id]);

    if (!book) {
        return <div>Loading...</div>;
    }


    //     book_availability: "",

    return (
        <>
            {/* <h1>{book.book_title}</h1> */}
            <section className="bg-[#9ca0a7] h-[100%] flex items-center justify-center flex-col py-6 pb-11">
                <div className="navigate-button flex items-center justify-center gap-x-3 mb-16">
                    <Link to={"/"} className="px-3 py-2 inline-block bg-[#676c74] rounded-lg font-bold text-white">Home</Link>
                    <Link to={"/viewbook"} className="px-3 py-2 inline-block bg-[#676c74] rounded-lg font-bold text-white">Book View</Link>
                    <Link to={"/addbook"} className="px-3 py-2 inline-block bg-[#676c74] rounded-lg font-bold text-white">Add Book</Link>
                </div>
                <div className="container w-[40%] py-28">
                    <div className="singlebook-container">
                        <div className="singlebook">
                            <div className="img-dis relative flex flex-col justify-between h-full p-6">
                                <div className="book-id">
                                    <p>Book ID : {book.id}</p>
                                </div>
                                <div className="dis relative flex items-center justify-center flex-col z-50">
                                    <h1 className="h1 text-center w-[25rem] m-0">{book.book_title}</h1>
                                    <h4 className="h4 text-center">{book.book_author}</h4>
                                </div>
                                <div className="Book-image flex items-center justify-center w-[100%] flex-col">
                                    <img src={book.book_image} alt="" className="profile img-fluid rounded-lg border-0" />
                                    <p className="font-bold mt-2">Price : 500 ₹</p>
                                </div>
                                <div className="Action-button relative flex items-center justify-around flex-col gap-3 z-50">
                                    <div className="dis relative flex items-center justify-between z-50 w-[100%]">
                                        <div className="genre text-center">
                                            <p>Book&nbsp;Edition</p>
                                            <p className="font-bold text-lg text-[#d0d5de]">{book.book_genre}</p>
                                        </div>
                                        <div className="publisher text-center">
                                            <p>Book&nbsp;Availability</p>
                                            <p className="font-bold text-lg text-[#d0d5de]">{book.book_year}</p>
                                        </div>
                                        <div className="pages text-center">
                                            <p>Book&nbsp;Format</p>
                                            <p className="font-bold text-lg text-[#d0d5de]">20</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="Action-button relative flex items-center justify-around flex-col gap-3 z-50">
                                    <div className="dis relative flex items-center justify-between z-50 w-[100%]">
                                        <div className="genre text-center">
                                            <p>book&nbsp;language:</p>
                                            <p className="font-bold text-lg text-[#d0d5de]">book_language</p>
                                        </div>
                                        <div className="pages text-center">
                                            <p>Book&nbsp;Publisher:</p>
                                            <p className="font-bold text-lg text-[#d0d5de]">book_publisher</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="Action-button relative flex items-center justify-around flex-col gap-3 z-50">
                                    <div className="dis relative flex items-center justify-center z-50 w-[100%]">
                                        <div className="genre text-center">
                                            <p>Location:</p>
                                            <p className="font-bold text-lg text-[#d0d5de]">book_location</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="Action-button relative flex items-center justify-around flex-col gap-3 z-50">
                                    <div className="dis relative flex items-center justify-between z-50 w-[100%]">
                                        <div className="genre text-center">
                                            <p>Genres</p>
                                            <p className="font-bold text-lg text-[#d0d5de]">{book.book_genre}</p>
                                        </div>
                                        <div className="pages text-center">
                                            <p>Book&nbsp;Pages</p>
                                            <p className="font-bold text-lg text-[#d0d5de]">20</p>
                                        </div>
                                        <div className="publisher text-center">
                                            <p>Publication&nbsp;Year</p>
                                            <p className="font-bold text-lg text-[#d0d5de]">{book.book_year}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleBook