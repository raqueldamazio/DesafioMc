import styled, {css} from "styled-components"

const center = css`
display: flex;
justify-content: center;
align-items: center;
`
 
export const Main = styled.main`
/* border: solid 1px; */
background-color: #FFC72C;
`

export const Primeira = styled.div`
width: 100%;
`

export const Burguer = styled.div`
${center}
justify-content: space-around;
width: 100%;
height: 55vh;
P {
    font-size: 300%;
    color: white;
    /* border: solid 1px; */
    width: 38vw;
    font-weight: bold;
}
img {
    height: 35vh;
}
`

export const Trio = styled.div`
/* border: solid 1px; */
${center}
`

export const TextoColorido = styled.span`
color: ${({color}) => color};`

export const Segunda = styled.div`
/* border: solid 1px; */
${center}
color: white;
`
export const Card = styled.div`
/* border: solix 1px; */
background-color: white;
border-radius: 10px;
width: 25vw;
height: 40vh;
align-items: center;
text-align: center;

img {
    width: 25vw;
}

    p {
        ${center}
    
    }

button {
    background-color: #FFBC0D;
    border: none;
    padding: 5px 20px;
    border-radius: 10px;
}

`

export const Terceira = styled.div`
/* border: solid 1px; */
${center}
justify-content: space-evenly;
height: 50vh;
`