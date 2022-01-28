import Mountain from './Mountain'
import { NavLink } from 'react-router-dom';


function Mountains ({ addToFavorites, mountainsArray }) {

    function mountainToMountains (clickedMountain) {
        addToFavorites(clickedMountain)
    }

    return (

        <div className='mountains'>
            {mountainsArray.map((mountain) => {
            return (
                <Mountain
                key={mountain.id}
                mountain={mountain}
                mountainToMountains={mountainToMountains}/>
            )
            })}
            <NavLink to="/favorites">View All Favorites</NavLink>
        </div>

    )
}

export default Mountains;