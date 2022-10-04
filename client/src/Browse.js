import React, {useState, useEffect} from 'react'
import ReviewCard from './ReviewCard'

function Browse() {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("/reviews")
        .then(response => response.json())
        .then((reviews) => {
            reviews.forEach(r => {
                r.wouldBuyAgain = r.would_buy_again
                delete r.would_buy_again
            })
            setReviews(reviews)
        })
    }, [])

    return (
        <div>
            {reviews.map((review) => {
                return (
                    <ReviewCard key={review.id} review={review} />
            )})}
        </div>
    )
}

export default Browse