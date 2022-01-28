import Favorite from "./Favorite";

function Favorites ({ favoritesArray, favoriteRemoval }) {

    return (
        <div className="favorites">
            <h1>My Favorites</h1>
            {favoritesArray.map((favorite) => {
                return (
                    <Favorite 
                    key={favorite.id}
                    favorite={favorite}
                    favoriteRemoval={favoriteRemoval}
                    />
                )
            })}
        </div>
    )
}

export default Favorites;