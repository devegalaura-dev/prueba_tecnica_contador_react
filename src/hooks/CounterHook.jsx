import { useState, useCallback } from 'react';

export const useCounter = (
    initialValue = 0, 
    min = 0, 
    max = 10, 
    step = 1
) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(count => Math.min(count + step, max)); //Devuelve el menor de los dos valores, asegurando que el contador nunca exceda el valor máximo (max).
  }, [max, step]);

  const decrement = useCallback(() => {
    setCount(count => Math.max(count - step, min)); //Devuelve el mayor de los dos valores, asegurando que el contador nunca baje del valor mínimo (min).
  }, [min, step]);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return {
    count,
    increment,
    decrement,
    reset,
    isMinValue: count === min,
    isMaxValue: count === max
  };
};
