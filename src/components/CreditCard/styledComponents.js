// Style your elements here
import styled from 'styled-components'
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    border: solid 1px;
    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: row;
        
    }
`
export const FirstContainer = styled.div`
    background-color: #344e7a;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    height: 50vh;
    @media screen and (min-width: 768px) {
        height: 100vh;
        width: 50vw;
        display: flex;
    flex-direction: column;
    justify-content: space-around;
    }
`
export const SecondContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: 50vh;
    @media screen and (min-width: 768px) {
        height: 100vh;
        width: 50vw;
    }
`
export const Card = styled.div`
    background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
    background-size: cover;
    height: 250px;
    width: 350px;
    padding-left: 30px;
    padding-bottom: 20px;
    border-radius: 20px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
export const Heading = styled.h1`
    font-size: 25px;
    color: #fff;
    padding-bottom: 10px;
    border-bottom: 3px solid #ffd773;
`

export const PayMentCard = styled.div`
    padding: 40px 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const PayHeading = styled.h1`
   color: #475569;
   font-size: 28px;
`
export const Input = styled.input`
    width: 50vw;
    margin-bottom: 15px;
    padding: 10px;
    outline: none;
    border: solid 1px #475569;
    border-radius: 5px;
    @media screen and (min-width: 768px) {
        width: 30vw;
    }
`

export const CardNum = styled.p`
    color: #fff;
    font-size: 25px;
    
`
export const CardHolder = styled.p`
    color: #d3d9e0;
    font-size: 20px;
    margin-bottom: 0px;
`
export const Name = styled.p`
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 8px;
`
