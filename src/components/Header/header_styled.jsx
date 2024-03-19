import styled,{createGlobalStyle,css} from "styled-components"


export const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: sans-serif;
}
`

const center = css`
display: flex;
justify-content: center;
align-items: center;

`

export const Header = styled.header`
/* border: solid 1px; */
height: 10vh;
${center}
justify-content: space-between;
padding-left: 20px;

img {
    height: 8vh;
}

`

export const div1 = styled.div`
width: 30vw;
justify-content: space-evenly;
display: flex;
align-items: center;

`
export const div2 = styled.div`
display: flex;
width: 10vw;
height: 5vh;
justify-content: center;
/* border: solid 1px; */
align-items: center;

img {
    height:5vh;
}
`
export const div3 = styled.div`
${center}
background-color: ${props => props.color};
border-radius: 10px;
height: 6vh;
width: 12vw;

img {
    height: 5vh;
}

`

