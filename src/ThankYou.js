import styled from 'styled-components';
import thanksIllustration from './images/illustration-thank-you.svg'


const ThankYou = ({rating}) =>{
    return (
        <ThankYouDiv>
            <img src={thanksIllustration} alt="#"></img>
            <div>
                <SelectedSpan>You selected {rating} out of 5</SelectedSpan>
            </div>
            <ThankYouSpan>Thank you!</ThankYouSpan>
            <InfoSpan>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</InfoSpan>
        </ThankYouDiv>
    );
}
const InfoSpan = styled.span`
    display: block;
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #969FAD;
    margin-top: 10px;
`



const ThankYouSpan = styled.span`
    display: block;
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 24px;
`

const SelectedSpan = styled.span`
    font-family: 'Overpass';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #FC7614;
`


const ThankYouDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 327px;
        height: 360px;
        background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
        border-radius: 15px;
        padding-top: 34px;
        padding-bottom: 37px;
        padding-left: 24px;
        padding-right: 24px;
        div{
            background-color: #262E38;
            border-radius: 22.5px;
            padding: 8px 12px 8px 12px;
            margin-top: 24px;
        }
    `


export default ThankYou;