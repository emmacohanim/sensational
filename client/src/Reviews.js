import React, { useState, useEffect } from "react";
import AddNewReview from "./AddNewReview";

function Reviews() {
    // const [reviews, setReviews] = useState([])
    // const [perfumes, setPerfumes] = useState([])

    // function addReview(newReview) {
    //     setReviews( reviews => [...reviews, newReview])
    // }

    // function addNewPerfumeReview(newPerfume) {
    //     setPerfumes( perfumes => [...perfumes, newPerfume])
    // }

    return (
        <div>
            <AddNewReview />
        </div>
    )
}