import { getDownloadURL, listAll, ref } from "firebase/storage"
import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { FilterContext } from "../../contexts/FilterContext"
import { storage } from "../../firebase-config"
import AuthBox from "../reusable-ui/layouts/AuthBox"

const Grids = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  padding: 2vh 2vw;
  margin: 0 3vw;
  background-color: white;
  border-radius: 20px;
`
const GridBox = styled.div`
  width: 250px;
  height: 250px;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
  }
  @media (max-width: 450px) {
    width: 110px;
    height: 110px;
  }
`
const GoHome = styled.div`
  width: 100%;
  a {
    color: #ea9b42;
    display: block;
    text-align: center;
    &:hover {
      color: #fff;
    }
  }
`

const Grid = () => {
  const { imageUrls, setImageUrls } = useContext(FilterContext)
  const imagesListRef = ref(storage, "images/")
  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url])
        })
      })
    })
  }, [])

  return (
    <AuthBox>
      <Grids>
        {imageUrls
          .filter((x, i) => imageUrls.indexOf(x) === i)
          .map((url, index) => (
            <GridBox key={index}>
              <img src={url} width="150px" />
            </GridBox>
          ))}
      </Grids>
      <GoHome>
        <Link to="/">Retour à l'accueil</Link>
      </GoHome>
    </AuthBox>
  )
}

export default Grid
