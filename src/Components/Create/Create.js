import React, { Fragment, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { AuthContext } from "../../store/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../Firebase/config";
const Create = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const { user } = useContext(AuthContext);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const date = new Date();
  const handleSubmit = (e) => {
    e.preventDefault();
    const storage = getStorage();
    const storageRef = ref(storage, `/image/${image.name}`);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, image).then((snapshot) => {
      try {
        console.log("Uploaded a blob or file!");
        getDownloadURL(snapshot.ref).then((url) => {
          console.log(url);
          db.collection("products").add({
            name,
            category,
            price,
            url,
            userId: user.uid,
            createdAt: date.toDateString(),
          });
        });
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    });
  };
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              onChange={(e) => setName(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              type="number"
              id="fname"
              name="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
          </form>
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          ></img>

          <br />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">
            upload and Submit
          </button>
        </div>
        <h3>uploaded {progress} %</h3>
      </card>
    </Fragment>
  );
};

export default Create;
