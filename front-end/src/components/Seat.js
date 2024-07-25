import React from 'react';
import styled from 'styled-components';

// Styled Components
const SeatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const SeatBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${props => {
    if (props.selected) return 'red'; // 선택된 좌석
    if (props.disabled) return '#353B44'; // 비활성화된 좌석
    return 'white'; // 기본 상태
  }};
  border: 2px solid ${props => {
    if (props.selected) return 'darkred';
    if (props.disabled) return '#353B44';
    return '#ccc';
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 8px;
`;

const SeatButton = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: ${props => (props.disabled ? '#bdbdbd' : '#007bff')};
  color: white;
  border-radius: 4px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Seat = ({ seat, handleClick, selected, disabled }) => {
  return (
    <SeatContainer onClick={() => !disabled && handleClick(seat.id)} disabled={disabled}>
      <SeatBox selected={selected} disabled={disabled}>
        {/* {`좌석 ${seat.id}`} */}
      </SeatBox>
      {/* <SeatButton disabled={disabled}>{disabled ? '예매됨' : selected ? '선택됨' : '선택하기'}</SeatButton> */}
    </SeatContainer>
  );
};

export default Seat;
