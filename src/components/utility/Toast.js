import React from 'react';

const Toast = ({message}) => {
  return (
    <div className="absolute top-[16px] left-1/2 -translate-x-1/2 py-[12px] px-[24px] rounded-[8px] bg-brainscapeBlue flex items-center justify-center">
      <span className="text-white">{message}</span>
    </div>
  );
};

export default Toast;
