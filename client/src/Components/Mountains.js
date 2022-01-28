import Mountain from './Mountain'
import { NavLink } from 'react-router-dom'

function Mountains ({ addToFavorites, mountainsArray }) {

    function mountainToMountains (clickedMountain) {
        addToFavorites(clickedMountain)
    }

    return (

        <div className='mountains'>
            <NavLink to="/favorites">Go to My Favorites</NavLink>
            <h1>Mountains</h1>
            {mountainsArray.map((mountain) => {
            return (
                <Mountain
                key={mountain.id}
                mountain={mountain}
                mountainToMountains={mountainToMountains}/>
            )
            })}
        </div>

    )
}

export default Mountains;