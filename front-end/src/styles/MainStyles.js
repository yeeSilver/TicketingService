// src/styles/MainStyles.js
import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: #201E1E;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
export const GridCon = styled.div`
    width: 428px;
    height: 926px;
`
export const SeatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-content: center;
  align-self: center;
  gap: 20px;
`;

export const PaymentButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: ${props => (props.disabled ? '#e0e0e0' : '#4caf50')};
  color: white;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 16px;
  border-radius: 4px;
`;

export const Head = styled.div`
    margin: 20px;
    gap: 20px;
    color: #FF5C00;
`

export const Stage = styled.div`
    font-weight: bold;
    color: white;
    font-size: 25px;
    margin-bottom: 50px;
`