import React from 'react';
import Restaurant from 'types/restaurant';

type Props = {
  phoneNumber: Restaurant['phone_number'];
};

const PhoneNumber = ({ phoneNumber }: Props) => (
  <div className="flex justify-center items-center">{phoneNumber}</div>
);

export default PhoneNumber;
