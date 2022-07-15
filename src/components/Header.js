import React, {useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const [condition, setCondition] = useState(false)
  const cars = useSelector(selectCars)

  return (
    <Container>
        <Link to="/tesla-clone">
            <img src='tesla-clone/images/logo.svg' alt="Tesla logo" />
        </Link>
        <Menu>
            {cars && cars.map((car, index) => (
                <Link to="/tesla-clone" key={index}>{car}</Link>
            ))}
        </Menu>
        <RightWrap>
            <Link to="/tesla-clone/order">Shop</Link>
            <Link to="/tesla-clone">Tesla Account</Link>
            <MenuIcon onClick = {() => setCondition(true)}/>
        </RightWrap>

        <Sidebar show = {condition}>
            <ul>
                <CloseWrapper>
                    <CloseIcon onClick = {() => setCondition(false)}/>
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                    <li key={index}><Link to="/tesla-clone">{car}</Link></li>
                ))}
                <li><Link to="/tesla-clone">Existing Inventory</Link></li>
                <li><Link to="/tesla-clone">Used Inventory</Link></li>
                <li><Link to="/tesla-clone">Trade-In</Link></li>
                <li><Link to="/tesla-clone">Cybertruck</Link></li>
                <li><Link to="/tesla-clone">Roadster</Link></li>
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