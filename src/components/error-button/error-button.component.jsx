import React, { useState } from 'react';


const ErrorButton = () => {

  const [throwError, setThrowError] = useState(false);

  const handleError = () => {
    setThrowError(true);
  }

  if (throwError) {
    throw new Error('Theres an error from the button!!');
  }

  return (
    <button onClick={handleError}>Throw Error</button>
  );

}

export default ErrorButton;