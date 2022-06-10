import React, {useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header() {
  const [condition, setCondition] = useState(false)
  const cars = useSelector(selectCars)

  return (
    <Container>
        <a>
            <img src="images/logo.svg" alt="Tesla logo" />
        </a>
        <Menu>
            {cars && cars.map((car, index) => (
                <a href="#" key={index}>{car}</a>
            ))}
        </Menu>
        <RightWrap>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <MenuIcon onClick = {() => setCondition(true)}/>
        </RightWrap>

        <Sidebar show = {condition}>
            <ul>
                <CloseWrapper>
                    <CloseIcon onClick = {() => setCondition(false)}/>
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                    <li key={index}><a href="#">{car}</a></li>
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
            </ul>
        </Sidebar>
    </Container>
  )
}

export default Header

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 600;
    height: 10vh;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;

    img {
            height: 15px;
            width: 120px;
        }
`

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40vw;
    z-index: 2;

    a {
        text-transform: uppercase;
        text-decoration: none;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const RightWrap = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 280px;
    
    a {
        text-decoration: none;
        text-transform: uppercase;
    }

   .MuiSvgIcon-root {
       cursor: pointer;
   }
`

const Sidebar = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    width: 300px;
    position: fixed;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    transform: ${ props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;

    ul {
        width: 90%;

        li {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding: 15px 0;
        list-style: none;
        }

        a {
            text-decoration: none;
        }
    }

    @media (max-width: 768px) {
        width: 250px;

        ul > li {
            padding: 12px 0;
        }
    }

`
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 15px;
    cursor: pointer;
`