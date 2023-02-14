import AuthBox from "../components/reusable-ui/layouts/AuthBox"
import InputBox from "../components/reusable-ui/layouts/InputBox"
import LinkInput from "../components/reusable-ui/LinkInput"
const Auth = () => {
  return (
    <AuthBox>
      <InputBox>
        <LinkInput LinkTo={"/login"} linkText="Se connecter" />
        <LinkInput LinkTo={"/register"} linkText="S'inscrire" />
      </InputBox>
    </AuthBox>
  )
}

export default Auth
