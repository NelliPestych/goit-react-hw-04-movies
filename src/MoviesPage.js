import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () =>
<ul>
    <li>
        <NavLink exact to="/">HOME</NavLink>
    </li>
    <li>
        <NavLink to="/movies">MOVIES</NavLink>
    </li>
</ul>

export default Navigation;