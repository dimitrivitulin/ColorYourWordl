import React, {useContext,useRef, useState } from "react";
import { UserContext } from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom"
import { AuthBox } from "../components/styles/AuthBox.styled";
import { InputBox } from "../components/styles/InputBox.styled";
import { Button } from "../components/styles/Button.styled";
import { Validation } from "../components/styles/Validation.styled";
import { InputWrap } from "../components/styles/InputWrap.styled";
import Logo from "../components/AuthComponents/Logo";
import ImgMap from "../components/AuthComponents/ImgMap";

const Register = () => {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  
  const [validation, setValidation] = useState("");

  const inputs = useRef([])
  const addInputs = el => {
    if(el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
  }  


  const handleForm = async (e) => {
    e.preventDefault()

    if((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
      setValidation("6 caractères minimum")
      return;
    }
    else if(inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Les mots de passe ne correspondent pas ")
      return;
    }

    try {

      const cred = await register(
        inputs.current[0].value,
        inputs.current[1].value
      )

      setValidation("")
      console.log(cred);
      navigate("/login")

    } catch (err) {

      if(err.code === "auth/invalid-email") {
        setValidation("Le format de l'email est invalide")
      }
      
      if(err.code === "auth/email-already-in-use") {
        setValidation("l'email a déja été utilisé")
      }
 
    }

  }


  return (
    <AuthBox>
      <Logo small />
      <InputBox onSubmit={handleForm}>

          <InputWrap 
          type="email"
          name="email"
          placeholder="Votre email" 
          ref={addInputs} 
          small/>

          <InputWrap 
          type="password"
          name="password"
          placeholder="Votre mot de passe"
          ref={addInputs}
          small/>

          <InputWrap 
          type="password"
          name="repeat-password"
          placeholder="Répéter votre mot de passe"
          ref={addInputs}
          small />

        <Button small>S'inscrire</Button>
      </InputBox>
        <Validation>{validation}</Validation>
        <ImgMap small/>
    </AuthBox>
  )
}

export default Register