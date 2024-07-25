// src/components/Main.js
import React, { useState } from 'react';
import { AppContainer, SeatsContainer, PaymentButton, Head, Stage } from '../styles/MainStyles';
import Seat from './Seat';
import PaymentModal from './PaymentModal';

const Main = () => {
  const [seats, setSeats] = useState([
    { id: 1, available: true },
    { id: 2, available: true },
    { id: 3, available: true },
    { id: 4, available: false },
    { id: 5, available: true },
    { id: 6, available: false },
    { id: 10, available: true },
    { id: 20, available: true },
    { id: 30, available: true },
    { id: 40, available: false },
    { id: 50, available: true },
    { id: 60, available: false },
    { id: 42, available: false },
    { id: 52, available: true },
    { id: 62, available: false }
  ]);

  const [selectedSeatId, setSelectedSeatId] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleSeatClick = (seatId) => {
    setSelectedSeatId(seatId);
  };

  const handlePayment = (cardNumber, userName, seatId) => {
    // 결제 처리 로직을 여기에 추가
    console.log(`결제 카드 번호: ${cardNumber}`);
    console.log(`사용자 이름: ${userName}`);
    console.log(`좌석 번호: ${seatId}`);

    // 좌석 상태 업데이트
    const updatedSeats = seats.map((seat) => {
      if (seat.id === seatId) {
        return { ...seat, paid: true };
      }
      return seat;
    });
    setSeats(updatedSeats);
    setSelectedSeatId(null);
  };

  return (
    <AppContainer>
      <Head>
        <h1>1st Oragne Bloom: Seoul Fanmeeting</h1>
      </Head>
      <Stage>STAGE</Stage>
      <div style={{width:'100px'}}>

        <SeatsContainer>
            {seats.map((seat) => (
            <Seat
                key={seat.id}
                seat={seat}
                handleClick={handleSeatClick}
                selected={seat.id === selectedSeatId}
                disabled={!seat.available || seat.paid}
            />
            ))}
        </SeatsContainer>

      </div>
      <PaymentButton
        disabled={selectedSeatId === null}
        onClick={() => setShowPaymentModal(true)}
      >
        결제하기
      </PaymentButton>
      {showPaymentModal && (
        <PaymentModal
          onClose={() => setShowPaymentModal(false)}
          onPayment={handlePayment}
          selectedSeatId={selectedSeatId}
        />
      )}
    </AppContainer>
  );
};

export default Main;
