import Hero from "./layouts/Hero";
import CourseView from "./layouts/Courses";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        <Hero />
        <CourseView />
      </div>
    </BrowserRouter>
  );
}

export default App;
