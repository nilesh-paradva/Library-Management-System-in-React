import { useEffect, useState } from "react"
import { Container, Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router"
import { AddBookThunk } from "../../services/action/BookAction";

const LibreryForm = () => {

    const { books, isSuccess } = useSelector((state) => state.BookReducer);
    console.log("isSuccess", isSuccess);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [bookForm, setBookForm] = useState({
        book_title: "",
        book_author: "",
        book_genre: "",
        book_year: "",
        book_price: "",
        book_publisher: "",
        book_id: "",
        book_edition: "",
        book_language: "",
        book_pages: "",
        book_availability: "",
        book_location: "",
        book_format: "",
        book_image: ""
    })


    const handleFormSubmit = (e) => {
        // e.preventDefault();
        dispatch(AddBookThunk(bookForm));
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setBookForm((prev) => ({
                ...prev,
                book_image: reader.result,
            }));
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        if (isSuccess) {
            navigate("/viewbook");
        }
    }, [isSuccess]);

    return (
        <>
            <section className="py-4 bg-[#9ca0a7]">
                <div className="navigate-button flex items-center justify-center gap-x-3 mb-12">
                    <Link to={"/"} className="px-3 py-2 inline-block bg-[#676c74] rounded-lg font-bold text-white">Home</Link>
                    <Link to={"/viewbook"} className="px-3 py-2 inline-block bg-[#676c74] rounded-lg font-bold text-white">Book View</Link>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <div className="max-w-4xl mx-auto mt-6 p-4 bg-[#65686b] shadow-lg rounded-lg">
                                <h2 className="text-2xl font-semibold text-center mb-6 text-white">Book Library Form</h2>
                                <form action="">
                                    <div className="space-y-6">
                                        {/* <!-- Book Title --> */}
                                        <div>
                                            <label htmlFor="book-title" className="block text-sm font-medium text-white">Book Title*</label>
                                            <input type="text" id="book-title" name="book_title" placeholder="Enter Book Title" value={bookForm.book_title} className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-[#797c7f] focus:border-[#797c7f] bg-[#797c7f] outline-none placeholder:text-white text-white" onChange={(e) => setBookForm({ ...bookForm, book_title: e.target.value })} />
                                        </div>

                                        {/* <!-- Book Author --> */}
                                        <div>
                                            <label htmlFor="book-author" className="block text-sm font-medium text-white">Book Author*</label>
                                            <input type="text" id="book-author" name="book_author" placeholder="Enter Book Author" value={bookForm.book_author} className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-[#797c7f] focus:border-[#797c7f] bg-[#797c7f] outline-none placeholder:text-white text-white" onChange={(e) => setBookForm({ ...bookForm, book_author: e.target.value })} />
                                        </div>

                                        {/* <!-- Book Genre --> */}
                                        <div>
                                            <label htmlFor="book-genre" className="block text-sm font-medium text-white">Book Genre*</label>
                                            <input type="text" id="book-genre" name="book_genre" placeholder="Enter Book Genre" value={bookForm.book_genre} className="mt-1 p-2 w-full border-2 outline-none border-gray-300 rounded-md shadow-sm focus:ring-[#797c7f] focus:border-[#797c7f] bg-[#797c7f] placeholder:text-white text-white" onChange={(e) => setBookForm({ ...bookForm, book_genre: e.target.value })} />
                                        </div>

                                        {/* <!-- Book Publication Year --> */}
                                        <div>
                                            <label htmlFor="book-year" className="block text-sm font-medium text-white">Book Publication Year*</label>
                                            <input type="number" id="book-year" name="book_year" placeholder="Enter Book Publication Year" value={bookForm.book_year} className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-[#797c7f] focus:border-[#797c7f] bg-[#797c7f] outline-none placeholder:text-white text-white" onChange={(e) => setBookForm({ ...bookForm, book_year: e.target.value })} />
                                        </div>

                                        {/* <!-- Book Price --> */}
                                        <div>
                                            <label htmlFor="book-price" className="block text-sm font-medium text-white">Book Price*</label>
                                            <input type="number" id="book-price" name="book_price" placeholder="Enter Book Price" value={bookForm.book_price} step="0.01" className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-[#797c7f] focus:border-[#797c7f] bg-[#797c7f] outline-none placeholder:text-white text-white" onChange={(e) => setBookForm({ ...bookForm, book_price: e.target.value })} />
                                        </div>

                                        {/* <!-- Book Publisher --> */}
                                        <div>
                                            <label htmlFor="book-publisher" className="block text-sm font-medium text-white">Book Publisher*</label>
                                            <input type="text" id="book-publisher" name="book_publisher" placeholder="Enter Book Publisher" value={bookForm.book_publisher} className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-[#797c7f] focus:border-[#797c7f] bg-[#797c7f] outline-none placeholder:text-white text-white" onChange={(e) => setBookForm({ ...bookForm, book_publisher: e.target.value })} />
                                        </div>

                                        {/* <!-- Book ID --> */}
                                        <div>
                                            <label htmlFor="book-id" className="block text-sm font-medium text-white">Book ID*</label>
                                            <input type="text" id="book-id" name="book_id" value={bookForm.book_id} placeholder="Enter Book ID" className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-[#797c7f] focus:border-[#797c7f] bg-[#797c7f] outline-none placeholder:text-white text-white" onChange={(e) => setBookForm({ ...bookForm, book_id: e.target.value })} />
                                        </div>

                                        {/* <!-- Book Edition --> */}
                                        <div>
                                            <label htmlFor="book-edition" className="block text-sm font-medium text-white">Book Edition*</label>
                                            <input type="text" id="book-edition" name="book_edition" placeholder="Enter Book Edition" value={bookForm.book_edition} className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-[#797c7f] focus:border-[#797c7f] bg-[#797c7f] outline-none placeholder:text-white text-white" onChange={(e) => setBookForm({ ...bookForm, book_edition: e.target.value })} />
                                        </div>

                                        {/* <!-- Book Language --> */}
                                        <div>
                                            <label htmlFor="book-language" className="block text-sm font-medium text-white">Book Language*</label>
                                            <input type="text" id="book-language" name="book_language" placeholder="Enter Book Language" value={bookForm.book_language} className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-[#797c7f] focus:border-[#797c7f] bg-[#797c7f] outline-none placeholder:text-white text-white" onChange={(e) => setBookForm({ ...bookForm, book_language: e.target.value })} />
                                        </div>

                                        {/* <!-- Book Number of Pages --> */}
                                        <div>
                                            <label htmlFor="book-pages" className="block text-sm font-medium text-white">Number of Pages*</label>
                                            <input type="number" id="book-pages" name="book_pages" placeholder="Enter Book Number of Pages" value={bookForm.book_pages} className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-[#797c7f] focus:border-[#797c7f] bg-[#797c7f] outline-none placeholder:text-white text-white" onChange={(e) => setBookForm({ ...bookForm, book_pages: e.target.value })} />
                                        </div>

                                        {/* <!-- Book Availability Status --> */}
                                        <div>
                                            <label htmlFor="book-availability" className="block text-sm font-medium text-white">Availability Status*</label>
                                            <select id="book-availability" name="book_availability" value={bookForm.book_availability} className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-[#797c7f] focus:border-[#797c7f] bg-[#797c7f] outline-none placeholder:text-white text-white" onChange={(e) => setBookForm({ ...bookForm, book_availability: e.target.value })}>
                                                <option value="">Select Status</option>
                                                <option value="Available">Available</option>
                                                <option value="Unavailable">Unavailable</option>
                                                <option value="On Hold">On Hold</option>
                                            </select>
                                        </div>

                                        {/* <!-- Book Location --> */}
                                        <div>
                                            <label htmlFor="book-location" className="block text-sm font-medium text-white">Book Location*</label>
                                            <input type="text" id="book-location" placeholder="Enter Book Location" name="book_location" value={bookForm.book_location} required className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-[#797c7f] focus:border-[#797c7f] bg-[#797c7f] outline-none placeholder:text-white text-white" onChange={(e) => setBookForm({ ...bookForm, book_location: e.target.value })} />
                                        </div>

                                        {/* <!-- Book Format --> */}
                                        <div>
                                            <label htmlFor="book-format" className="block text-sm font-medium text-white">Book Format*</label>
                                            <select id="book-format" name="book_format" value={bookForm.book_format} className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-[#797c7f] focus:border-[#797c7f] bg-[#797c7f] outline-none placeholder:text-white text-white" onChange={(e) => setBookForm({ ...bookForm, book_format: e.target.value })}>
                                                <option value="">Select Format</option>
                                                <option value="Hardcover">Hardcover</option>
                                                <option value="Paperback">Paperback</option>
                                                <option value="Ebook">Ebook</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="book-format" className="block text-sm font-medium text-white">Book Format*</label>
                                            <input type="file" id="book-location" name="book_image" onChange={handleImageChange} className="mt-1 p-2 w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-[#797c7f] focus:border-[#797c7f] bg-[#797c7f] outline-none text-white" />
                                        </div>

                                        {/* <!-- Submit Button --> */}
                                        <div className="flex justify-center mt-6">
                                            <Link className="px-6 py-2 bg-[#797c7f] text-white font-semibold rounded-md shadow-sm hover:bg-[#505152]  transition duration-500 no-underline" onClick={handleFormSubmit}>Submit</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default LibreryForm