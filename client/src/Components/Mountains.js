import Mountain from './Mountain'
import { NavLink } from 'react-router-dom';


function Mountains ({ addToFavorites, mountainsArray }) {

    function mountainToMountains (clickedMountain) {
        addToFavorites(clickedMountain)
    }

    return (

        <div className='mountains'>
            <br></br>
            {mountainsArray.map((mountain) => {
            return (
                <Mountain
                key={mountain.id}
                mountain={mountain}
                mountainToMountains={mountainToMountains}/>
            )
            })}
            <br></br>
            <br></br>
        </div>

    )
}

export default Mountains;