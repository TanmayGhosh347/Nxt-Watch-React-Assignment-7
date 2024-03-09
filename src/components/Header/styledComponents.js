import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavbarHeader  = styled.nav`  
  position: fixed;    
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 60px;
  width: 100%;
  background-color: ${props => props.bgColor};
@media screen (min-width : 768px) {
  padding-left: 30px;
  padding-right: 30px;
}
`


export const HeaderLogo  = styled.img`  
  width: 80px;
  height: 30px;
@media screen (min-width : 768px) {
  width: 100px;
  height: 40px;
}`

export const ActionsContainer  = styled.div`  
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const ThemeButton  = styled.button`  
  background: none;
  border: none;
  margin-right: 10px;
`

export const   = styled.button`  

@media screen (min-width : 768px) {

}`

export const LogoutButton  = styled.div`  
  border: 1px solid;
  font-family: 'Roboto';
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-top: 5px;
  border-radius: 5px;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  border-color: ${props => props.color};
  margin-left:6px;
@media screen (min-width : 768px) {
    display:none;
}`


export const LogOutIconButton  = styled.button`  
    background: none;
    border: none;
@media screen (min-width : 768px) {
    display:none;
}`

export const ProfileImage  = styled.img`  
  width: 30px;
  height: 30px;
  margin-right: 10px;
`


export const ModalContainer  = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;

@media screen (min-width : 768px) {
    height: 200px;
    width: 400px;    
}`

export const CloseButton  = styled.button`  
  background-color: transparent;
  border: 1px solid gray;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: 'Roboto';
  font-weight: 'bold';
  font-size: 12px;
@media screen (min-width : 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;    
}`

export const ConfirmButton  = styled.button`  
  background-color: #3b82f6;
  align-self: flex-end;
  color: white;
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
  border: 1px solid #3b82f6;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
@media screen (min-width : 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;    
}`





export const ModalDesc  = styled.p`  
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: black;
  text-align: center;
@media screen (min-width : 768px) {
    font-size: 20px;
}`

export const LogoLink  = styled(Link)`  
  text-decoration:none;
`


export const ButtonsContainer   = styled.div`  
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`
