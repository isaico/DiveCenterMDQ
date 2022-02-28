import React from "react";
import { NavLink } from "react-router-dom";

const LinkTo = (props) => {
    return (
        <NavLink
        exact
            to={props.to}
            className={({ isActive }) =>
                isActive ? props.active : props.className
            }
        >
            {props.text}
        </NavLink>
    );
};

export default LinkTo;
