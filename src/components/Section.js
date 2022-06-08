import React from 'react'
import styled from 'styled-components'

function Section({title, description, leftText, rightText, bgImg}) {
  return (
    <Container bg = {bgImg}>
        <Text>
            <h1>{title}</h1>
            <p>{description}</p>
        </Text>
        <BottomWrap>
            <Buttons>
                <LeftButton>
                    {leftText}
                </LeftButton>
                {rightText && 
                <RightButton>
                    {rightText}
                </RightButton>
                }
            </Buttons>
            <ArrowImg src='/images/down-arrow.svg' />
        </BottomWrap>

    </Container>
  )
}

export default Section

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: ${props => `url('/images/${props.bg}')` };
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Text = styled.div`
    padding-top: 15vh;
`

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    margin-bottom: 30px;
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    font-size: 12px;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
    margin-left: 28px;
    background-color: white;
    opacity: 0.65;
    color: black;
`

const ArrowImg = styled.img`
    height: 40px;
    margin-top: 20px;
    animation: animateDown infinite 1.5s;
`

const BottomWrap = styled.div``