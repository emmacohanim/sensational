import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import ReviewCard from './ReviewCard'

function Browse({reviews, setReviews, currentUser}) {

    
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/browse")
    }, [reviews])

    function handleDeleteReview(id) {
        const updateReviewsArray = reviews.filter((review) => review.id !== id)
        setReviews(updateReviewsArray)
    }

    function handleEditReview(editedReview) {
        setReviews((reviews) => reviews.map(review => {
            if (review.id == editedReview.id) {
                return editedReview
            } else {
                return review
            }
        }))
    }
    

    return (
        <div>
            {reviews.map((review) => {
                return (
                    <ReviewCard key={review.id} review={review} handleDeleteReview={handleDeleteReview} currentUser={currentUser} handleEditReview={handleEditReview}/>
            )})}
        </div>
    )
}

export default Browse