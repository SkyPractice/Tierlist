import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = (props) => {
    const inputRef = React.useRef(null); // Create a ref for the input element

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.displayStatsFunc && inputRef.current) {
            props.displayStatsFunc(inputRef.current.value);
            if (inputRef.current) {
                inputRef.current.value = ""; // Clear the input field
            }
        }
    };

    return (
        <header>
            <Link to={'/'} style={{ textDecoration: "none" }}>
                <h1 id="title">SKYPRACTICE TIERLIST</h1>
            </Link>
            <form onSubmit={handleSubmit}>
                <input
                    id="SearchInput"
                    name="search"
                    ref={inputRef} // Attach the ref to the input element
                    placeholder="Search"
                />
            </form>
            <a href="https://discord.gg/VEQzjJxgXt" style={{ textDecoration: "none" }}>
                <h2 id="discord">DISCORD</h2>
            </a>
        </header>
    );
};

export default Header;