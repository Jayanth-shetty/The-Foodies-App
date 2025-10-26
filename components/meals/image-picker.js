"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const imageInput = useRef();
  function handelPickClicked() {
    imageInput.current.click();
  }

  function onFileChange() {
    const file = imageInput.current.files[0];
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setSelectedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
         {!selectedImage && <p>No image selected yet</p>}
         {selectedImage && <Image src={selectedImage} alt="image selected" fill/>}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png , image/jpg , image/jpeg"
          name={name}
          onChange={onFileChange}
          ref={imageInput}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handelPickClicked}
        >
          Pick An Image
        </button>
      </div>
    </div>
  );
}
