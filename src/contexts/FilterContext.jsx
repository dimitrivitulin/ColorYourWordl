import { createContext, useState, useRef } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { v4 } from "uuid";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { storage } from "../firebase-config";

export const FilterContext = createContext();

export function FilterContextProvider(props) {
  const [tabState, setTabState] = useState(1);
  const [filterClass, setFilterClass] = useState("");
  const [customFilter, setCustomFilter] = useState({
    contrast: 100,
    brightness: 100,
    saturate: 100,
    sepia: 0,
    gray: 0,
  });
  const toggleTab = (index) => {
    setTabState(index);
    if (tabState === 1) {
      setFilterClass("");
    }
  };

  const [imageUrls, setImageUrls] = useState([]);
  const uploadInputRef = useRef(null);
  const imgResultRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);

  const handleChangeInput = (e) => {
    setImageFile(URL.createObjectURL(e.target.files[0]));
    setImageUpload(e.target.files[0]);
  };
  
  const handleUpload = () =>             {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  const handleDownloadImage = () => {
    domtoimage
      .toBlob(imgResultRef.current)
      .then(function (blob) {
        saveAs(blob, `image_${v4()}.png`);
      })
      .catch(function (error) {
        console.error("Il semblerait qu'il y ait une erreur!", error);
      });
  };

  return (
    <FilterContext.Provider
      value={{
        tabState,
        setTabState,
        toggleTab,
        filterClass,
        setFilterClass,
        customFilter,
        setCustomFilter,
        imageUrls,
        setImageUrls,
        uploadInputRef,
        imgResultRef,
        imageFile,
        setImageFile,
        imageUpload,
        handleChangeInput,
        handleUpload,
        handleDownloadImage,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
}
