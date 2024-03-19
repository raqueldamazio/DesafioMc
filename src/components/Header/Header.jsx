import m from "../../assets/Mc.png"
import cel1 from "../../assets/cel2.png"
import cel from "../../assets/cel1.png"
import * as S from "./header_styled"

export default function Header() {
  return (
   <S.Header>
   <img src={m} alt="" />

   <S.div1>
<S.div2>
  <img src={cel} alt="" />
  <p>Baixe o app</p>
</S.div2>

<S.div3 color="#FFC72C">
  <p>Peça seu méqui</p>
  <img src={cel1} alt="" />
</S.div3>

</S.div1>
   </S.Header>
  )
}
