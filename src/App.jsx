
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Components/Form";
function App() {

  return (
    <>
   <Router>
       <Navbar/>
      <Routes>
        <Route path="/Form" element={<Form/>} />
        
      </Routes>
    </Router>
     
    </>
  )
}

export default App
