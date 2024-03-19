import * as S from "./main_styled"
import burguer from "../../assets/bigmac.png"
import pequeno from "../../assets/small.png"
import fries from "../../assets/batata.png"
import ice from "../../assets/sorvete.png"
import React, {useState} from 'react'
import Card from "./Card"
import sofa from "../../assets/sofa.png"
import loja from "../../assets/loja.png"
import ultimo from "../../assets/ultimo.png"

export default function Main() {
const [imagemTrocar, setImagemTrocar] = useState(burguer)

return (
    <S.Main>
<S.Primeira>
  <S.Burguer>
    <img src={imagemTrocar} alt="big mac" />
    <p>BATEU AQUELA <S.TextoColorido color="#DB0007;
"> #FOME </S.TextoColorido>DE <S.TextoColorido color="#DB0007;
">MÉQUI?</S.TextoColorido></p>
  </S.Burguer>

<S.Trio>
<img onClick={()=>{setImagemTrocar(pequeno)}}  src={pequeno} alt="big mac"/>
<img onClick={()=>{setImagemTrocar(fries)}} src={fries} alt="batata frita"/>
<img onClick={()=>{setImagemTrocar(ice)}} src={ice} alt="sorvete de casquinha" />
</S.Trio>
<S.Segunda>
  <h2>Promoção</h2>
</S.Segunda>

<S.Terceira>
  <Card imagem={sofa} texto={"Que tal um #méqui no sofá?"}/>
  <Card imagem={loja} texto={"Venha conhecer nossa nova loja!"}/>
  <Card imagem={ultimo} texto={"Confira as medidas que o Méqui adotou!"}/>
</S.Terceira>

 </S.Primeira>
    </S.Main>
  )
}
 