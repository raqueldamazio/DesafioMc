import styled, {css} from "styled-components"

const center = css`
display: flex;
justify-content: center;
align-items: center;
`

export const Footer = styled.footer`
/* border: solid 2px; */
${center}
/* flex-direction: column; */

`

export const DivFooter = styled.footer`
/* border: solid 1px; */
${center}
/* justify-content: space-around; */
height: 10vh;
width: 60vw;
justify-content: flex-start;
`

export const DivCards = styled.div`
/* border: solid 1px; */
width: 30vw;
${center}
justify-content: space-evenly;
`

export const Divimg = styled.div`
/* border: solid 1px; */
`

export const Divimg2 = styled.div`
/* border: solid 1px; */
`