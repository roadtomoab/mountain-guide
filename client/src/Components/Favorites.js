import Favorite from "./Favorite";

function Favorites ({ favoritesArray }) {

    return (
        <div className="favorites">
            <h1>My Favorites</h1>
            {favoritesArray.map((favorite) => {
                return (
                    <Favorite 
                    key={favorite.id}
                    favorite={favorite}
                    />
                )
            })}
        </div>
    )
}

export default Favorites;