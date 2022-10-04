import React, {useState} from 'react';

function ReviewCard({review}) {

    const { id, rating, comment, image, wouldBuyAgain } = review;

    function buyAgain() {
        if (wouldBuyAgain === true) {
            return "Yes"
        }
        else {
            return "No"
        }
    }
    console.log(review)
    return (
        <div>
            <h2>Rating: {rating}</h2>
            <h2>Comment: {comment}</h2>
            <img src={image}/>
            <h2>Would You Buy Again? {wouldBuyAgain ? "Yes" : "No"}</h2>
        </div>
    )
}

export default ReviewCard;
