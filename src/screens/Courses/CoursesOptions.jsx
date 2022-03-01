import React from "react";
import LinkTo from "../../components/LinkTo";

const CoursesOptions = () => {
    return (
        <div className="flex  justify-center my-10 space-x-4">
            <LinkTo
                
                to="/cursos/"
                active="active-btn"
                text="Todos"
                className="courses-filter-btn "
            />
            <LinkTo
                to="/cursos/SDI"
                active="active-btn"
                text="SDI"
                className="courses-filter-btn"
                
            />
            <LinkTo
                to="/cursos/TDI"
                active="active-btn"
                text="TDI"
                className="courses-filter-btn "
            />
            <LinkTo
                to="/cursos/ERDI"
                active="active-btn"
                text="ERDI"
                className="courses-filter-btn"
            />
            <LinkTo
                to="/cursos/PFI"
                active="active-btn"
                text="PFI"
                className="courses-filter-btn"
            />
        </div>
    );
};

export default CoursesOptions;
