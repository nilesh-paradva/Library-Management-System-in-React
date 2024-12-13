import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBookAction, GetBookThunk } from "../services/action/BookAction";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";

const ViewBook = () => {

    const { books } = useSelector((state) => state.BookReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetBookThunk());
    }, []);

    return (
        <>
            <section className="my-24">
                <Container>
                    <Row className="gap-y-52">
                        <Col xxl={4} className="tetxt-center">
                            <div className="book-container">
                                <div class="book">
                                    <div className="img-dis relative">
                                        <div className="img absolute">
                                            <img src="https://i.pinimg.com/736x/c0/28/54/c02854a59bb95f10e076485898a1841a.jpg" alt=""/>
                                        </div>
                                        <div className="dis relative flex items-center justify-center flex-col z-50">
                                            <h1 className="h1 text-center mt-28 ps-4 w-[19rem]">Title</h1>
                                            <h4 className="h4 text-center ps-4">Author</h4>
                                        </div>
                                        <div className="dis mt-52 relative flex items-center justify-around z-50">
                                            <p className="font-bold text-lg ps-5">Genre</p>
                                            <p className="font-bold text-lg pe-4">Publish Year</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={4} className="tetxt-center">
                            <div className="book-container">
                                <div class="book">
                                    <div className="img-dis relative">
                                        <div className="img absolute">
                                            <img src="https://i.pinimg.com/736x/c0/28/54/c02854a59bb95f10e076485898a1841a.jpg" alt=""/>
                                        </div>
                                        <div className="dis relative flex items-center justify-center flex-col z-50">
                                            <h1 className="h1 text-center mt-28 ps-4 w-[19rem]">Title</h1>
                                            <h4 className="h4 text-center ps-4">Author</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xxl={4} className="tetxt-center">
                            <div className="book-container">
                                <div class="book">
                                    <div className="img-dis relative">
                                        <div className="img absolute">
                                            <img src="https://i.pinimg.com/736x/c0/28/54/c02854a59bb95f10e076485898a1841a.jpg" alt=""/>
                                        </div>
                                        <div className="dis relative flex items-center justify-center flex-col z-50">
                                            <h1 className="h1 text-center mt-28 ps-4 w-[19rem]">Title</h1>
                                            <h4 className="h4 text-center ps-4">Author</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ViewBook