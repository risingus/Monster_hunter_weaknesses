import styled from 'styled-components';

export const StyledInput = styled.input `
    width: 11rem;
    background-color: transparent;
    color: white;
    height: 3rem;
    font-size: 1rem;
    border-right: none;
    border-bottom-color: #9c27b0;
    
    &::placeholder{
        color: white;
    }

    &:focus{
        outline:none;
    }


    @media (min-width: 600px) {
           
           flex: 1;
           max-width: 25rem;
           font-size: 2rem;
           height: 4rem;
           
       }  


`;