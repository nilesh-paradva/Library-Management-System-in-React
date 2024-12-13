import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBookThunk, GetBookAction, GetBookThunk } from "../services/action/BookAction";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";

const ViewBook = () => {

    const { books } = useSelector((state) => state.BookReducer);
    console.log("edit data", books);
    
    const dispatch = useDispatch();

    

    useEffect(() => {
        if (books) {
            dispatch(GetBookThunk());
        }
    }, [books, dispatch]);

    return (
        <>
            <section className="py-24 bg-[#9ca0a7]">
                <div className="navigate-button flex items-center justify-center gap-x-3 mb-16">
                    <Link to={"/"} className="px-3 py-2 inline-block bg-[#676c74] rounded-lg font-bold text-white">Home</Link>
                    <Link to={"/addbook"} className="px-3 py-2 inline-block bg-[#676c74] rounded-lg font-bold text-white">Add Book</Link>
                </div>
                <Container>
                    <Row className="gap-y-52">
                        {books.map((item) => {
                            return (
                                <Col xxl={4} className="tetxt-center" key={item.id}>
                                    <div className="book-container">
                                        <div class="book">
                                            <div className="img-dis relative flex flex-col justify-between h-full p-6">
                                                <div className="dis relative flex items-center justify-center flex-col z-50">
                                                    <h1 className="h1 text-center w-[25rem] m-0">{item.book_title}</h1>
                                                    <h4 className="h4 text-center">{item.book_author}</h4>
                                                </div>
                                                <div className="Book-image flex items-center justify-center w-[100%]">
                                                    <img src={item.book_image} alt="" className="profile img-fluid rounded-lg border-0" />
                                                </div>
                                                <div className="Action-button relative flex items-center justify-around flex-col gap-3 z-50">
                                                    <div className="dis relative flex items-center justify-between z-50 w-[100%]">
                                                        <div className="genre">
                                                            <p>Genres</p>
                                                            <p className="font-bold text-lg text-[#d0d5de]">{item.book_genre}</p>
                                                        </div>
                                                        <div className="publisher">
                                                            <p>Publication&nbsp;Year</p>
                                                            <p className="font-bold text-lg text-[#d0d5de]">{item.book_year}</p>
                                                        </div>
                                                    </div>
                                                    <div className="button-Action flex items-center justify-center flex-col flex-lg-row gap-3">
                                                        <Link className="px-3 py-2 rounded-lg bg-green-500 text-white">View</Link>
                                                        <Link className="px-3 py-2 rounded-lg bg-yellow-600 text-white" to={`/updatebook/${item.id}`}>Edit</Link>
                                                        <Link className="px-3 py-2 rounded-lg bg-red-800 text-white" onClick={() => dispatch(DeleteBookThunk(item.id))}>Delete</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ViewBook