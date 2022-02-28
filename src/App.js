import Hero from "./layouts/Hero";
import CourseView from "./screens/Courses/CoursesContainer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
import Contact from "./screens/Contact";



function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        <Nav/>
        <Routes>
          <Route exact path="/" element={ <Hero  /> }/>
          <Route exact path="/contacto" element={ <Contact  /> }/>
          {/* <Route exact path="/cursos" element={ <CourseView /> }/> */}
          <Route exact path="/cursos" element={ <CourseView /> }/>
          <Route exact path="/cursos/:urlCourses" element={ <CourseView /> }/>
          
        </Routes> 
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
