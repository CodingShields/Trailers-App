


const userInput = () => {
    return (
        <>
        <input
                onChange={(e)=>setUserSearchInput(e.target.value)}
                value={userSearchInput}
                type="text">
            </input>
            <button
            onClick={handleClick}
            >Search</button>
        </>
    )
}

export default userInput