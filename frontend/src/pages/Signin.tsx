import SigninLeft from "../components/SigninLeft"
import SigninRight from "../components/SigninRight"

function Signin() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
  <div>
    <SigninLeft text="signin"/>
  </div>
  <div className="hidden md:block">
    <SigninRight />
  </div>
</div>

  )
}

export default Signin