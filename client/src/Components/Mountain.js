import { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Mountain ({ mountainToMountains, mountain }) {

    const [ rating, setRating ] = useState({
        town_rating: "",
        ski_rating: "",
        mountain_id: mountain.id
    })

    const handleChange = (e) => {
        setRating({
            ...rating,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        const userRatings = { ...rating };

        fetch("/ratings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userRatings),
        })
        .then((r) => r.json())
        .then((rating) => {
            console.log(rating);
            setRating({
                town_rating: "",
                ski_rating: ""
            })
        })
    }

    function handleClick () {
        mountainToMountains(mountain)
    }

    return (

        <div className="mountains">
            <h1>{mountain.name}</h1>
            <img src={mountain.image_url} />
            <br></br>
            <p>{mountain.summary}</p>
            <h3>Pass Info</h3>
            <span>{mountain.pass_info}</span>
            <h3>Average Snowfall</h3>
            <span>{mountain.avg_snowfall} inches / year</span>
            <h3>Town Rating</h3>
            <span>{mountain.avg_ratings.avg_town_rating}/10</span>
            <h3>Ski Rating</h3>
            <span>{mountain.avg_ratings.avg_ski_rating}/10</span>

            <h4>Leave a Rating!</h4>
                <form onSubmit={handleSubmit}>
                    <input
                    type="float"
                    placeholder="town rating"
                    name="town_rating"
                    max="10"
                    value={rating.town_rating}
                    onChange={handleChange}
                    />
                    <input
                    type="float"
                    placeholder="ski rating"
                    name="ski_rating"
                    max="10"
                    value={rating.ski_rating}
                    onChange={handleChange}
                    />
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            <a id="favoriteButton" onClick={handleClick}>Add To Favorites</a>
            <br></br>
        </div>

    )
}

export default Mountain;