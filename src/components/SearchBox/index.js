import { render } from "@testing-library/react";
import React from "react";

function Searchbox(props) {

    return (
        <div id="searchBox">
            <input
                onChange={props.handleSearch}
                type="text"

            ></input>
            <button
                onClick={props.handleSort}
            >Sort</button>
        </div>
    )
}

export default Searchbox;