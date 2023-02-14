import { useContext, useState, useRef } from "react"
import { UserContext } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
// import { Validation } from "../components/styles/Validation.styled"
import AuthBox from "../components/reusable-ui/layouts/AuthBox"
import InputBox from "../components/reusable-ui/layouts/InputBox"
import Input from "../components/reusable-ui/Input"
import Button from "../components/reusable-ui/Button"
import Validation from "../components/reusable-ui/Validation"

const Login = () => {
  const { login } = useContext(UserContext)

  const navigate = useNavigate()

  const [validation, setValidation] = useState("")

  const inputs = useRef([])
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el)
    }
  }

  // useEffect(() =>{
  //   const registerVerification= () =>{
  //     if (currentUser){
  //       console.log("currentUser", currentUser);
  //       navigate("/register");
  //     }
  //   }
  //   return registerVerification;
  // }, []);

  const handleForm = async (e) => {
    e.preventDefault()
    console.log(inputs)
    try {
      const cred = await login(inputs.current[0].value, inputs.current[1].value)

      setValidation("")
      console.log(cred)
      navigate("/")
    } catch {
      setValidation("Votre mot de passe ou votre adresse email est incorrecte ")
    }
  }

  return (
    <AuthBox>
      <InputBox onSubmit={handleForm}>
        <Input type="email" reference={addInputs} />
        <Input type="password" reference={addInputs} />
        <Button>Se connecter</Button>
      </InputBox>
      <Validation>{validation}</Validation>
    </AuthBox>
  )
}

export default Login
