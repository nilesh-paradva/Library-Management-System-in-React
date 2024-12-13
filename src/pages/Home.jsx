import { Button, Col, Container, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router"
// import Image from "../assets/bookimage.jpg"

const Home = () => {

    const navigate = useNavigate();

    return (
        <>
            <section className="overflow-hidden">
                <Container fluid>
                    <Row>
                        <Col className="position-relative h-screen bg-[url('assets/bookimage.jpg')] bg-cover bg-center ">
                            <div className="position-absolute top-0 left-0 w-full bg-black opacity-80 h-[100%]">
                                <ul className="flex items-center relative justify-center gap-4 flex-col flex-lg-row m-0 py-3 opacity-85">
                                    <li className=""><Link to={"/"} className="no-underline inline-block px-3 py-2 font-sans bg-[#9ca0a7] !border-2 text-black rounded-lg !border-green-900 hover:bg-[#717579] transition duration-500 font-bold">Home</Link></li>
                                    <li className=""><Link to={"/viewbook"} className="no-underline inline-block px-3 py-2 font-sans bg-[#9ca0a7] text-black !border-2 rounded-lg !border-green-900 hover:bg-[#717579] transition duration-500 font-bold">Book View</Link></li>
                                </ul>
                                <div className="flex items-center justify-center text-white h-screen ">
                                    <Button className="border-0 bg-[#9ca0a7] px-3 py-2 text-black rounded-md hover:bg-[#717579] transition duration-900 !font-bold relative z-50" onClick={() => navigate("/addbook")}>Add Book</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Home