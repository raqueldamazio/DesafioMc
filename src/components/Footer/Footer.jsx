import * as S from "./footer_styled"
import mcsmall from "../../assets/mczinho.png"
import appstore from "../../assets/appstore.png"
import googleplay from "../../assets/googleplay.png"

export default function Footer() {
  return (
   <S.Footer>
    <S.DivFooter>
        <img src={mcsmall} alt="" />
        <p>© McDonald’s 2024</p>
    </S.DivFooter>
    <S.DivCards>
        <S.Divimg>
        <img src={googleplay} alt="" />
        </S.Divimg>
        <S.Divimg2>
        <img src={appstore} alt="" />
        </S.Divimg2>
    </S.DivCards>
   </S.Footer>
  )
}
