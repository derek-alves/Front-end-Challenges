import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';

export const Container = styled.div`
   display: flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   width:100%;
   max-width:456px;
   margin-bottom:50px;

   h1{
     font-size:43px;
     padding:30px;

   
   }
`;


export const InputWrapper = styled.div`
   padding:2px 10px;
   width:70%;
   background:white;

   display:flex;
   justify-content:center;
   align-items:center;
`;

export const Input = styled.input`
   background:var(--white);
   width:90%;
   padding:10px 0;
   color:black;
   outline:none;
   margin-right:5px;
`;


export const InputIcon = styled(FaSearch)`
   width:20px;
   height:20px;

   fill:gray;

`;