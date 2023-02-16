import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material"; 

const ButtonMobileOTP = ( ) => {
  
  const [mobileSeconds, setMobileSeconds] = useState(0); // set initial seconds to 60
  useEffect(() => {
    if (mobileSeconds > 0) {
      // decrease seconds every second
      const countdown = setTimeout(() => setMobileSeconds(mobileSeconds - 1), 1000);
      // clean up the timeout when the component unmounts or seconds reach 0
      return () => clearTimeout(countdown);
    }

      }, [mobileSeconds]);

  const handleSendMobileOTP = () => {
    // send OTP here
    console.log("Mobile OTP");
    setMobileSeconds(60); // reset timer to 60 seconds
  };

  return (
    <div>
    { mobileSeconds === 0 ? (
      <Button
        variant='contained'
        onClick={handleSendMobileOTP}>Send Mobile OTP</Button>
    ) : (
      <Button
        variant='contained'
        disabled>
        Resend Mobile OTP in {mobileSeconds} seconds...</Button>
    )}
    </div>
  );
};

export default ButtonMobileOTP;


