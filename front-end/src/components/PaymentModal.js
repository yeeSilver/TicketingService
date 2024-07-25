import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
`;

const PaymentModal = ({ onClose, onPayment, selectedSeatId }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    onPayment(data.cardNumber, data.userName, selectedSeatId);
    reset();
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        
        <h2>결제하기</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="카드 번호"
            {...register('cardNumber', { required: true })}
          />
          <Input
            type="text"
            placeholder="사용자 이름"
            {...register('userName', { required: true })}
          />
          <Button type="submit">결제하기</Button>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default PaymentModal;
