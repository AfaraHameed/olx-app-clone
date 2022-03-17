import React from "react";
import { useEffect, useState, useContext } from "react";
import { PostContext } from "../../store/PostContext";
import { db } from "../../Firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import "./View.css";
function View() {
  const [userDetails, setUserDetails] = useState("");
  const { postDetails } = useContext(PostContext);
  useEffect(() => {
    const { userId } = postDetails;
    db.collection("users")
      .where("id", "==", userId)
      .get()
      .then((snapshot) => {
        console.log(snapshot);
        snapshot.forEach((doc) => {
          console.log(doc.data());
          setUserDetails(doc.data());
        });
      });
  }, []);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>

            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default View;
