import { Link } from "react-router"

const LibreryForm = () => {
    return (
        <>
            <Link to={'/'}>Home</Link>
            <Link to={'/singlebook'}>SingleBook</Link>
            <Link to={'/updatebook'}>UpdateBook</Link>
            <Link to={'/viewbook'}>viewbook</Link>
        </>
    )
}

export default LibreryForm