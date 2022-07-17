import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import styled from 'styled-components'

function Order() {
    const location = useLocation()
    const {model} = location.state

  return (
    <Container>
        <TopWrapper>
            <Link to="/tesla-clone">
                <img src='tesla-clone/images/logo.svg' alt="Tesla logo" />
            </Link>
        </TopWrapper>
        <OrderDetail>
            <OrderLeft>
                <img src="tesla-clone/images/order-model-s.jpeg" alt="model s" />
                <BottomBar>
                    <p>$142,890 Purchase price</p>
                    <p>$16,200 Potential savings over 6 years</p>
                </BottomBar>
            </OrderLeft>
            <OrderRight>
                <h1>{model}</h1>
                <p>Estimated Delivery: Nov 2022 - Feb 2023</p>
                <Options>
                    <p>Purchase Price</p>
                    <p>Potential savings</p>
                </Options>
                <Performance>
                    <Data><p>604<span>km</span></p><span>Range(est.)</span></Data>
                    <Data><p>250<span>km/h</span></p><span>Top Speed</span></Data>
                    <Data><p>3.2<span>s</span></p><span>0-100 km/h</span></Data>
                </Performance>
                <Motor>
                    <h4>Dual Motor All-Wheel Drive</h4>
                    <p><span>Model S</span><span>$136,990</span></p>
                </Motor>
                <Motor>
                    <h4>Tri Motor All-Wheel Drive</h4>
                    <p><span>Model S Plaid</span><span>$178,590</span></p>
                </Motor>
                <Note>All prices are shown without potential incentives or gas savings of $16,200.</Note>
                <Plaid>
                    <h3>Plaid Upgrades</h3>
                    <li>Quickest accelerating car in production today</li>
                    <li>0-100 km/h: 2.1s</li>
                    <li>1/4 mile: 9.23@250 km/h trap speed</li> 
                    <li>1,020 horsepower</li> 
                    <li>Three high performance motors with carbon-sleeved rotors</li> 
                    <li>Torque vectoring</li>
                </Plaid>
                <Autopilot>
                    <h1>Enhanced Autopilot</h1>
                    <p>$6,400</p>
                    <li>Navigate on Autopilot</li>
                    <li>Auto Lane Change</li>
                    <li>Autopark</li>
                    <li>Summon</li>
                    <li>Smart Summon</li>
                    <button>ADD</button>
                    <button>FEATURE DETAILS</button>
                </Autopilot>
                <SelfDriving>
                    <h1>Full Self-Driving Capability</h1>
                    <p>$12,800</p>
                    <li>All functionality of Basic Autopilot and Enhanced Autopilot</li>
                    <li>Traffic Light and Stop Sign Control</li>
                    <p>Coming Soon</p>
                    <li>Autosteer on city streets</li>
                    <p>The currently enabled features require active driver supervision and do not make the vehicle autonomous. The activation and use of these features are dependent on achieving reliability far in excess of human drivers as demonstrated by billions of miles of experience, as well as regulatory approval, which may take longer in some jurisdictions. As these self-driving features evolve, your car will be continuously upgraded through over-the-air software updates.</p>
                    <button>ADD</button>
                    <button>FEATURE DETAILS</button>
                </SelfDriving>
                <Charging>
                    <h1>Charging</h1>
                    <ChargingOption>
                        <Option>
                            <input type="checkbox" name="wall"/>
                            <label for="wall">Wall Connector</label>
                        </Option>
                        <p>$510</p>
                    </ChargingOption>
                    <ChargingOption>
                        <Option>
                            <input type="checkbox" name="mobile"/>
                            <label for="mobile">Mobile Connector</label>
                        </Option>
                        <p>$255</p>
                    </ChargingOption>
                    <button>LEARN MORE</button>
                </Charging>
                <Ordering>
                    <h1>Order Your Model S</h1>
                    <p>Estimated Delivery: Mar 2023 - Jun 2023</p>
                    <button>CONTINUE TO PAYMENT</button>
                </Ordering>
            </OrderRight>
        </OrderDetail>
    </Container>
  )
}

export default Order

const Container = styled.div`
    position: relative;
    margin: 0 50px;
    height: 100vh;
`

const TopWrapper = styled.div`
    position: fixed;
    width: 100vw;
    height: 8vh;
    background-color: white;
    z-index: 2;

    img {
            height: 15px;
            width: 120px;
            margin-top: 18px;
        }
`
const BottomBar = styled.div`
    display: flex;
    background-color: #f4f4f4;
    padding: 25px 50px;
    position: absolute;
    bottom: 0;
    left: 15%;
    border-radius: 15px 15px 0 0;
    align-items: center;
    p {
        margin: 0 10px;
        font-weight: 600;
    }

    p:last-child {
        padding-left: 13px;
        font-weight: 400;
        font-size: 14px;
        border-left: 1px solid gray;
    }
`

const OrderDetail = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 95px;
`

const OrderLeft = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    width: 65%;

    img {
        width: 90%;
        height: 60%;
        margin-top: 110px;
    }
`

const OrderRight = styled.div`
    overflow-y: auto; 
    text-align: center;
    width: 27%;
    position: absolute;
    right: 0;

    h1 {
        font-size: 40px;
    }

    > p {
        margin: 10px 0;
    }
`
const Options = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px;
    background-color: #f4f4f4;
    border-radius: 20px;
    font-size: 14px;
    margin-top: 20px;
    cursor: pointer;

    p:first-child {
        padding: 7px 25px;
        background-color: white;
        border-radius: 20px;
    }

    p:last-child {
        padding: 5px 25px;
        background-color: #f4f4f4;
        border-radius: 20px;
    }
`

const Performance = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 30px 0;

    span {
            font-size: 14px;
            font-weight: 400;
    }
`

const Data = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 25px;
    font-weight: 600;

    p span {
        font-weight: 600;
    }
`

const Motor = styled.div`
    text-align: left;
    margin: 10px 0 20px 0;

    p {
        display: flex;
        justify-content: space-between;
        border: 1px solid gray;
        border-radius: 30px;
        padding: 15px 30px;
        margin-top: 15px;
        cursor: pointer;
        
    }
`

const Note = styled.p`
    font-weight: 400;
    font-size: 14px;
`

const Plaid = styled.ul`
    padding-left: 30px;
    margin-top: 80px;
    width: 93%;

    li {
        text-align: left;
        margin: 15px 0;
        padding-left: 6px;
    }
`
const Autopilot = styled.ul`
    margin-top: 80px;

    h1 {
        font-size: 32px;
    }

    p {
        font-size: 14px;
        font-weight: 600;
        padding-top: 10px;
    }

    li {
        text-align: left;
        margin: 10px 0;
        list-style: inside;
    }

    button {
        width: 150px;
        height: 34px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 13px;
        margin: 25px 0;
    }

    button:first-of-type {
        background-color: #3e6be1;
        margin-right: 18px;
        color: white;
    }
`
const SelfDriving = styled.ul`
    margin-top: 20px;

    h1 {
        font-size: 32px;
    }

    p {
        text-align: left;
    }

    p:first-of-type {
        font-size: 14px;
        font-weight: 600;
        padding-top: 10px;
        text-align: center;
    }

    p:nth-of-type(2) {
        margin-top: 45px;
        font-weight: 600;
    }

    p:last-of-type {
        font-size: 14px;
        margin-top: 20px;
    }

    li {
        text-align: left;
        margin: 10px 0;
        padding-left: 6px;
        list-style-position: outside;
        margin-left: 15px;
    }

    button {
        width: 150px;
        height: 34px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 13px;
        margin: 25px 0;
    }

    button:first-of-type {
        background-color: #3e6be1;
        margin-right: 18px;
        color: white;
    }
`
const Charging = styled.div`
    margin: 80px 0;

    h1 {
            font-size: 32px;
            margin-bottom: 20px;
        }

    button {
            width: 150px;
            height: 34px;
            border-radius: 20px;
            border: none;
            cursor: pointer;
            font-weight: 600;
            font-size: 13px;
            margin: 25px 0;
        }
`
const ChargingOption = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    margin-bottom: 15px;

`
const Option = styled.div`

    label {
        color: gray;
        padding-left: 10px;
    }
`

const Ordering = styled.div`
    margin-bottom: 280px;

    h1 {
            font-size: 32px;
        }

    p {
        margin: 20px 0;
        font-weight: 600;
    }
    
    button {
            padding: 10px 80px;
            border-radius: 20px;
            border: none;
            cursor: pointer;
            font-weight: 600;
            font-size: 13px;
            margin: 25px 0;
            background-color: #3e6be1;
            color: white;
        }
    
`