import React, { useState, useEffect } from "react"

import searchList from "../assets/data/search-list"
import userInput from "./user-input"

export default function Test() {
    
    const [userSearchInput, setUserSearchInput] = useState("")
    
    const [apiMovieData, setApiMovieData] = useState([])
    
    const [searchSelection, setUserSearchSelection] = useState("")

    const [renderUserInput, setRenderUserInput] = useState(false)

    const apiKey ="k_kh53jvpk"

    // function handleClick() {
    //     fetch(`https://imdb-api.com/en/API/trailer/${apiKey}/tt12921446`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //         })
    // }

    function handleOnChange(e) {
        const value = e.target.value;
        console.log(value);
    }

   
    return (
        <div className="test-container">
            <h1> Welcome To Trailers</h1>
            <h3>How would you like to search for a Movie today?</h3>
            <select
                onChange={handleOnChange}
            >
                {searchList.map((item) => {
                    return (
                        <option
                            value={item.title}
                            key={item.id}
                        >
                            {item.title}
                        </option>
                    )
                })}
            </select>
            {renderUserInput? <userInput /> : ""}
        </div>

    )
}