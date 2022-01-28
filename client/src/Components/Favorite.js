function Favorite ({ favorite, favoriteRemoval }) {

    function handleClick () {
        favoriteRemoval(favorite)
    }


    return (
        <div className="favorite">
            <p>{favorite.name}</p>
            <br></br>
            <button onClick={handleClick}>Remove from Favorites</button>
        </div>
    )
}

export default Favorite;