import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import PerfumeForm from "./PerfumeForm";



function AddNewReview({ addNewReviewToArray, isLoggedIn}) {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [image, setImage] = useState("");
  const [wouldBuyAgain, setWouldBuyAgain] = useState(false);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [perfumeId, setPerfumeId] = useState("");
  const [perfumes, setPerfumes] = useState([]);
  const navigate = useNavigate();

  const visible = perfumeId === "Other";

  useEffect(() => {
    fetch("/perfumes")
      .then((response) => response.json())
      .then((perfumes) => setPerfumes(perfumes));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (visible) {
      fetch("/perfumes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accepts: "application/json",
        },
        body: JSON.stringify({
          perfume: {
            name: name,
            brand: brand,
            reviews_attributes: [
              {
                rating: rating,
                comment: comment,
                image: image,
                would_buy_again: wouldBuyAgain,
              },
            ],
          },
        }),
      }).then((r) => r.json())
      .then((newReview) => addNewReviewToArray(newReview)) 
    } else {
      fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accepts: "application/json",
        },
        body: JSON.stringify({
          rating: rating,
          comment: comment,
          image: image,
          would_buy_again: wouldBuyAgain,
          perfume_id: perfumeId,
        }),
      })
        .then((r) => r.json())
        .then((newReview) => { 
            newReview.wouldBuyAgain = newReview.would_buy_again
            delete newReview.would_buy_again
            addNewReviewToArray(newReview)})
            navigate("/browse")
    }
  }

  useEffect(()=>{
    if (!isLoggedIn) {
        navigate("/log-in")
        // return (
        //   <p>Please log in before creating a new review</p>
        // )
    }
}, [isLoggedIn])

  return (
    <div>
      <h1>Add A New Review Here!</h1>
    
      <form className="form" onSubmit={handleSubmit}>
        <select
        name="rating"
          value={rating}
          onChange={(e) => setPerfumeId(e.target.value)}
          name="perfumes"
          value={perfumeId}
        >
          <option disabled value="">
            {" "}
            -- select a perfume --{" "}
          </option>
          {perfumes.map((perfume) => {
            return (
              <option value={perfume.id}>
                {perfume.name} | {perfume.brand}
              </option>
            );
          })}
          <option value="Other"> Other</option>
        </select>
        <input
          className="input"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
          type="text"
          rating="rating"
          placeholder="Rate on scale of 1-10"
        />
        <input
          className="input"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          type="text"
          comment="comment"
          placeholder="Enter a comment about the product"
        />
        <input
          className="input"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          type="text"
          image="image"
          placeholder="Enter image URL"
        />
        <label for="wouldBuyAgain">Would Buy Again?</label>{" "}
        <input
          type="checkbox"
          checked={wouldBuyAgain}
          onChange={(e) => setWouldBuyAgain(e.target.checked)}
          id="wouldBuyAgain"
        />
        {visible ? (
          <PerfumeForm
            name={name}
            brand={brand}
            setName={setName}
            setBrand={setBrand}
          />
        ) : null}
        <button type="submit">
          Create Review
        </button>
      </form>
    </div>
  );
}

export default AddNewReview;
