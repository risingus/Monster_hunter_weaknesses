import styled from 'styled-components';

export const Title = styled.h1`
    color:white;
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 3rem;

    h1{
        font-size: 4.5rem;
        margin-left:1rem;
        overflow: hidden;
        text-decoration: underline;
        text-decoration-color: #9c27b0;
        border-right: 0.2rem solid #9c27b0;
        white-space: nowrap;
        animation: 
            typing 1.5s steps(16, end),
            blink-caret 0.9s step-end infinite,
            blink-underline 0.9s step-end infinite ;

        @keyframes typing {
            from { width: 0 }
            to { width: 24rem }
        }

        @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: #9c27b0; }
        }

        @keyframes blink-underline{
            from, to {text-decoration-color: transparent}
            50% {text-decoration-color:#9c27b0}
        }

        span{
            margin: .3rem;
        }
    }

    @media (min-width: 600px) {
           
          h1{
              font-size: 6rem;
          }
           
       }  

`;