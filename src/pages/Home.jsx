import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../contexts/AuthContext";
import { FilterContext } from "../contexts/FilterContext";
import ImageField from "../components/HomeComponents/ImageField/ImageField";
import Tabs from "../components/HomeComponents/Tabs/Tabs";
import LogoHome from "../components/HomeComponents/LogoHome";
import { useEffect } from "react";

const HomeWrap = styled.div`
  background-color: #3977f6;
  min-height: 100vh;
  padding: 20px;
`;
const HomeBox = styled.div`
  display: flex;
  flex-direction: raw;
  justify-content: space-between;
  width: 100%;
  background-color: whitesmoke;
  border-radius: 15px;
  padding: 10vh 5vw 15vh 5vw;
  box-sizing: border-box;
  font-family: "Anton", sans-serif;
  position: relative;
  input,
  button {
    font-family: "Anton", sans-serif;
  }
  @media (max-width: 450px) {
    padding-bottom: 5vh;
    padding-top: 3vh;
    flex-direction: column;
  }
`;

const HomeLeft = styled.div`
  background-color: lightgray;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width:50%;
 
  @media(max-width:450px){
    width: 100%;
  }
`;
const HomeRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 5vh 5vw;
  @media(max-width:450px){
    width: 100%;
    padding: 0;
  }
`;
const ButtonsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  gap: 20px;
`;
const BackButtonBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media(max-width:450px){
   bottom: -50px;
  }
`;
const BackButton = styled.div`
  background-color: #3977f6;
  width: 50px;
  height: 50px;
  border: 1px solid #fff;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  a{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    background-color: transparent;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  &:hover, :focus{
    transform: scale(1.05);
    background-color:${props => props.red ? "crimson" : "#ea9b42"};
  }
`;
const Close = styled.img`
  width: 18px;
`
const Coeur = styled.img`
  width: 30px;
`
const DownloadButton = styled.button`
  border: none;
  outline: none;
  background-color: #ea9b42;
  color: #fff;
  padding: 8px;
  border-radius: 30px;
  cursor: pointer;
  img {
    width: 15px;
    margin: 0 auto;
  }
  &:hover,
  :focus {
    background-color: #3977f6;
  }
`;
const UploadButton = styled.button`
  border: none;
  outline: none;
  background-color: #ea9b42;
  color: #fff;
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #3977f6;
  }
  `;
const Home = () => {
  const { imageUpload, imageFile, setImageFile, handleUpload, handleDownloadImage } =
  useContext(FilterContext);
  useEffect(() =>{
    setImageFile(null);
    }, []);
  const { logout } = useContext(UserContext);
  const [validation, setValidation] = useState("");
  const handleLogout = () => {
    try {
      const cred = logout();
      navigate("/");
      console.log(cred, "déconnexion réussi");
    } catch {
      setValidation("une erreur s'est produite réessayer");
    }
  };

  return (
    <HomeWrap>
      <LogoHome />
      {/* <HomeTitle>Filtres d'image <span>Bonjour  {currentUser?.email}</span></HomeTitle> */}
      <HomeBox>
        <HomeLeft>
          <ImageField />
        </HomeLeft>
        <HomeRight>
          <Tabs />
          <ButtonsBox>
            <DownloadButton onClick={handleDownloadImage} disabled={!imageFile}>
              <img src="./src/assets/download.png" />
            </DownloadButton>
            <UploadButton onClick={handleUpload} disabled={!imageUpload}>
              Enregistrer la photo
            </UploadButton>
          </ButtonsBox>
        </HomeRight>
        <BackButtonBox>
          <BackButton red>
            <button onClick={handleLogout}>
              <Close  src="./src/assets/close.png" />
            </button>
          </BackButton>
          <BackButton>
            <Link to="/grid">
              <Coeur src="./src/assets/coeur.png" />
            </Link>
          </BackButton>
        </BackButtonBox>
      </HomeBox>
    </HomeWrap>
  );
};

export default Home;
