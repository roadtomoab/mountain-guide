import { useState } from 'react';

function Mountain ({ mountainToMountains, mountain }) {

    function handleClick () {
        mountainToMountains(mountain)
    }

    return (

        <div className="mountains">
            <h3>{mountain.name}</h3>
            <img src={mountain.image_url} />
            <br></br>
            <a onClick={handleClick}>Add To Favorites</a>
            <ul>Summary
                <li>{mountain.summary}</li>
            </ul>
            <ul>Pass Info
                <li>{mountain.pass_info}</li>
            </ul>
            <ul>Average Snowfall
                <li>{mountain.avg_snowfall}</li>
            </ul>
            <ul>Best For
                <li>{mountain.best_for}</li>
            </ul>
        </div>

    )
}

export default Mountain;