import React, { useContext } from "react";
import { FilterContext } from "../../../contexts/FilterContext";
import "./ImageField.css";
import styled from "styled-components";

const StyledImage = styled.img.attrs((props) =>
  props.tabState === 2
    ? {
        style: {
          filter: `
    contrast(${props.customFilter.contrast}%)
    brightness(${props.customFilter.brightness}%)
    saturate(${props.customFilter.saturate}%)
    sepia(${props.customFilter.sepia}%)
    grayscale(${props.customFilter.gray}%)
    `,
        },
      }
    : {
        style: {
          filter: "",
        },
      }
)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`
const Upload = styled.div`
  color:#3977F6;
  display:flex;
  align-items: center;
  justify-content: center;
  gap:5px;
  cursor: pointer;
  img{
    width: 30px;
    height: 30px;
  }
`
const ImageFieldBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a{
    display:block;
    width:100%;
    text-align:center;
  }
`
;
const ImageField = () => {
  const {
    filterClass,
    customFilter,
    tabState,
    imageFile,
    uploadInputRef,
    handleChangeInput,
    imgResultRef,
  } = useContext(FilterContext);

  return (
    <ImageFieldBox>
        <a
          onClick={() =>
            uploadInputRef.current && uploadInputRef.current.click()
          }
        >
          {imageFile ? (
            <StyledImage
              className={filterClass}
              tabState={tabState}
              customFilter={customFilter}
              src={imageFile}
              alt=""
              ref={imgResultRef}
            />
          ) : (
            <Upload>
              <img src="./src/assets/plus.png"/>
              <p>Charger une Image</p>
            </Upload>
          )}
          <input
            onChange={handleChangeInput}
            ref={uploadInputRef}
            type="file"
            hidden
            accept="image/*"
          />
        </a>
    </ImageFieldBox>
  );
};

export default ImageField;
