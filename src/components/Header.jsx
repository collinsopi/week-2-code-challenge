import React from "react";
import "../styles/Header.css";

export default function Header({ openForm }) {
    return (
        <header className="header">
        <h1 className="header-title">Smart Goal Planner</h1>
        <button className="btn btn-save" onClick={openForm}>+ New Goal</button>
        </header>
    );
}
