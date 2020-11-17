import styled from 'styled-components';
import { FiArrowDown, FiArrowUp, FiX } from "react-icons/fi";

export const Container = styled.div`
   
   background:rgba(243, 241, 239, 0.9);
   height: 50%;
   width:100%;

   .topSection{
     display:flex;
     justify-content:space-between;
     padding:15px 10px 10px 25px;
     span{
       color:rgba(46, 49, 49, 1);
     }
    
     
   }
   
`;

export const Header = styled.div``;


export const Bottom = styled.div``;


export const FiArrowdown = styled(FiArrowDown)`

`;
export const FiArrowup = styled(FiArrowUp)``;
export const Fix = styled(FiX)`
`;