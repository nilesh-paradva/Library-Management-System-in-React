import LibraryForm from './components/Libraryform/LibraryForm';
import SingleBook from './pages/SingleBook';
import UpdateBook from './pages/UpdateBook';
import ViewBook from './pages/ViewBook';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addbook" element={<LibraryForm />} />
          <Route path="/singlebook/:id" element={<SingleBook />} />
          <Route path="/updatebook/:id" element={<UpdateBook />} />
          <Route path="/viewbook" element={<ViewBook />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
