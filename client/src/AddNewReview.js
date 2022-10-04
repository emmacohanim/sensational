import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"


function AddNewReview() {
    const [rating, setRating] = useState("")
    const [comment, setComment] = useState("")
    const [image, setImage] = useState("")
    const [wouldBuyAgain, setWouldBuyAgain] = useState(false)
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [perfumeId, setPerfumeId] = useState("")
    const [perfumes, setPerfumes] = useState([])
    const navigate = useNavigate()
    
    const visible = perfumeId === "Other"
    

    useEffect(() => {
        fetch("/perfumes")
        .then(response => response.json())
        .then((perfumes) => setPerfumes(perfumes))
    }, [])

   function handleSubmit(e) {
    e.preventDefault();
    if (visible) {
        fetch("/perfumes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({
                perfume: {
                    name: name, 
                    brand: brand
                }, 
                review: {
                    rating: rating, 
                    comment: comment, 
                    image: image, 
                    wouldBuyAgain: wouldBuyAgain
                } 
        })
    }
    )
    .then((r) => r.json())
    // .then((newPerfumeReview) => addNewPerfumeReview(newPerfumeReview))
    }
    else {
        fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "accepts": "application/json"
            },
            body: JSON.stringify({
                rating: rating, 
                comment: comment, 
                image: image, 
                wouldBuyAgain: wouldBuyAgain,
                perfumeId: perfumeId
            })
        })
        .then((r) => r.json())
        .then((newReview) =>{
            navigate.push("/browse")
        })
       }
    }



    return (
        <div>
            <h1>Add A New Review Here!</h1>
            <form onSubmit={handleSubmit}>
                <select onChange={(e)=> setPerfumeId(e.target.value)} name="perfumes" className="button" value={perfumeId}>
                    <option disabled value=""> -- select an option -- </option>
                        {perfumes.map(perfume => {
                            return <option value={perfume.id}>{perfume.name} | {perfume.brand}</option>
                        })}
                    <option value="Other"> Other</option>
                </select>
                <input className='input' onChange = {(e) => setRating(e.target.value)} value={rating} type="text" rating="rating" placeholder="Rate product on scale of 1-10"/>
                <input className='input' onChange = {(e) => setComment(e.target.value)} value={comment} type="text" comment="comment" placeholder="Enter a comment about the product"/>
                <input className='input' onChange = {(e) => setImage(e.target.value)} value={image} type="text" image="image" placeholder="Enter image URL"/>
                <label for="wouldBuyAgain">Would Buy Again?</label> <input type="checkbox" checked={wouldBuyAgain} onChange = {(e) => setWouldBuyAgain(e.target.checked)} id="wouldBuyAgain" /> 
                {visible ? (
                        // <PerfumeForm
                        //     visible={visible}
                        //     setVisible={setVisible}
                        // /> 
                        <p>Perfume Form</p>
                    ) : null}
                <button className='button' type="submit">Create Review</button>
            </form>
        </div>
    )
}

export default AddNewReview