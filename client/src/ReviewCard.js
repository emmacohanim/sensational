import React, {useState} from 'react';


function ReviewCard({review, handleEditReview, handleDeleteReview, currentUser}) {

    const {id, rating, comment, image, wouldBuyAgain, perfume, user} = review;
    const [editedRating, setEditedRating] = useState(rating)
    const [editedComment, setEditedComment] = useState(comment)

    function handleEditClick() {
        fetch(`/reviews/${review.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                rating: editedRating,
                comment: editedComment
            }),
        })
        .then((r) => r.json())
        .then((editedReview) => handleEditReview(editedReview))
    }

    function handleDeleteClick() {
        fetch(`/reviews/${review.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        )
        handleDeleteReview(id)
    }

    
    return (
        <div className="card">
            <div className="container">
                { currentUser&& (currentUser.id === review.user_id) ? <div className="editDelete">
                    {/* if current user is truthy and conditional, then render buttons */}
                    {/* if current user is falsy, it will not bother checking ids */}
                    <button className= "button" onClick={handleDeleteClick}>Delete</button>
                    <button className= "button" onClick={handleEditClick}>Edit</button>
                </div> : null }
                <div className="reviewTextAll">
                    <h2>{perfume.name} | {perfume.brand}</h2>
                        <p className="reviewText"><b>Rating:</b><span contentEditable={currentUser &&(currentUser.id === review.user_id)} onInput={e => {setEditedRating(e.target.textContent)}}>{rating}</span></p>
                        <p className="reviewText" id="comment"><b>Comment:</b><span contentEditable={currentUser &&(currentUser.id === review.user_id)} onInput={e => {setEditedComment(e.target.textContent)}}> {comment}</span></p>
                        <p className="reviewText"><b>Would You Buy Again? </b> {wouldBuyAgain ? "Yes" : "No"}</p>
                        <p className="reviewText"><b>Created by:</b> {user.username}</p>
                </div> 
                <img src={image} alt={perfume.name} className="image"/>
            </div>
        </div>
    )
}

export default ReviewCard;
