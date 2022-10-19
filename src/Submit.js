import styled from 'styled-components';
import iconStar from './images/icon-star.svg'

const Submit = ({setRating, setShowpage, rating}) =>{
    
    const submitHandler = () =>{
        if(!rating) return;
        setShowpage(false);
    }
  
    return(
        <RatingDiv >
            <ImgContainer>
                <img src={iconStar}></img>
            </ImgContainer>
            <h1>How did we do?</h1>
            <span>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</span>
            <ButtonDiv>
                <button onClick={()=>{
                    setRating(1)
                }}>1</button>

                <button onClick={()=>{
                    setRating(2)
                }}>2</button>

                <button onClick={()=>{
                    setRating(3)
                }}>3</button>

                <button onClick={()=>{
                    setRating(4)
                }}>4</button>

                <button onClick={()=>{
                    setRating(5)
                }}>5</button>

            </ButtonDiv>
            <SubmitButton onClick={submitHandler}>SUBMIT</SubmitButton>
        </RatingDiv>
    );
}

const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;
    background: #FC7614;
    border: 0;
    border-radius: 22.5px;
    margin-top: 24px;
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 1.86667px;
    color: #FFFFFF;
    cursor: pointer;
    transition: 0.3s;
    &:hover{
        background: #FFFFFF;
        color: #FC7614;
    }
`

const ButtonDiv = styled.div`
    display: flex;
    gap: 18px;
    margin-top: 24px;
    button{
        text-align: center;
        background-color: #262E38;
        border: 0;
        border-radius: 50%;
        font-family: 'Overpass';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.175px;
        color: #7C8798;
        width: 42px;
        height: 42px;
        cursor: pointer;
        transition: 0.3s;
        :hover {
        color: white;
        background-color: #FC7614;
        }
        :focus {
            background: #7C8798;
            color: #FFFFFF;
        }
    }
    
`

const RatingDiv = styled.div`
    width: 327px;
    height: 360px;
    background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
    border-radius: 15px;
    padding: 24px;
    padding-bottom: 32px;
    h1{
        font-family: 'Overpass';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        color: #FFFFFF;
        margin-top: 16px;
    }
    span{
        display: block;
        font-family: 'Overpass';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #969FAD;
        margin-top: 10px;
    }
`

const ImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #262E38;
    width: 40px;
    height: 40px;
`


export default Submit;