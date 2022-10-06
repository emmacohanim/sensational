import React from 'react';


function ReviewCard({review}) {

    const { rating, comment, image, wouldBuyAgain, perfume, user} = review;

    console.log(review)
    return (
        <div>
            <h2>{perfume.name} | {perfume.brand}</h2>
            <h2>Rating: {rating}</h2>
            <h2>Comment: {comment}</h2>
            <h2>Would You Buy Again? {wouldBuyAgain ? "Yes" : "No"}</h2>
            <p>Created by: {user.username}</p>
            <img src={image} alt={perfume.name}/>
        </div>
    )
}

export default ReviewCard;
