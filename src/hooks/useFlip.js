import React, { useState } from 'react';

const useFlip = (initialState = true) => {//defaults to true
  const [isFlipped, setIsFlipped] = useState(initialState);
  const toggleFlip = () => {
    setIsFlipped(isFlipped => !isFlipped)
  }
  return [isFlipped, toggleFlip]//make sure to return an array to work like a hook
}
export default useFlip;

