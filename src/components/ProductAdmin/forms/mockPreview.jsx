import React, { useState } from "react";
import { mockImages } from "../../../mock/mockImages";
import {  Stack } from "@mui/material";

function MockPreview(props) {
  const [selectedImage, setSelectedImage] = useState(mockImages[0].image);

  const handleImageSelect = (image) => {
    setSelectedImage(image.image);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", maxWidth: "619px", width: "97%" }}
    >
      <Stack>
        <div
          style={{
            backgroundColor: "#DFDFDF",
            marginBottom: 5,
            borderRadius: "6px",
            height: "auto",
            width: "auto",
          }}
        >
          <img
            src={selectedImage}
            alt="pcMain"
            style={{ objectFit: "content", width: "100%", height: "693px", padding:"1rem" }}
          />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {mockImages.map((image, index) => (
            <div
              key={image.id}
              style={{
                width: "70px",
                height: "77px",
                backgroundColor: "#DFDFDF",
                borderRadius: "6px",
              }}
            >
              <img
                onClick={() => handleImageSelect(image)}
                src={image.image}
                alt="pc"
                style={{ objectFit: "cover", width: "100%", height: "90%", cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
      </Stack>
    </div>
  );
}

export default MockPreview;
