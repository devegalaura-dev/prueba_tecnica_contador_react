import { memo, useEffect } from 'react';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import PrimaryButton from './buttons/PrimaryButton.jsx';
import SecondaryButton from './buttons/SecondaryButton.jsx';
import IconButton from './buttons/IconsButtons.jsx';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useCounter } from '../hooks/CounterHook.jsx';

const Counter = memo(({
  initialValue = 0,
  min = 0,
  max = 10,
  step = 1
}) => {
  const {
    count,
    increment,
    decrement,
    reset,
    isMinValue,
    isMaxValue
  } = useCounter(initialValue, min, max, step);

  useEffect(() => {
    if (isMaxValue) {
      Swal.fire({
        title: '¡Atención!',
        text: `Has alcanzado el valor máximo de ${max}!`,
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false,
      });
    }
  }, [isMaxValue, max]);

  return (
    <div className="mx-auto p-12 bg-white rounded-lg shadow-lg space-y-4">
      <div className="text-center text-3xl font-semibold text-gray-700">{count}</div>
      <div className="flex justify-between gap-4">
        <SecondaryButton 
          text='Decrementar'
          onClick={decrement} 
          disabled={isMinValue}
        >
          Decrementar
        </SecondaryButton>
        <PrimaryButton 
          text='Incrementar'
          onClick={increment} 
          disabled={isMaxValue}
        >
          Incrementar
        </PrimaryButton>
        <IconButton 
          icon={<RefreshIcon />} 
          text = 'Reiniciar'
          onClick={reset}
          disabled={isMinValue}
        >
        </IconButton>
      </div>
    </div>

    
    
  );
});

Counter.propTypes = {
  initialValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number
};

Counter.displayName = 'Counter'; //ESLint tiene una regla llamada react/display-name que recomienda que los componentes envueltos en memo tengan un nombre para facilitar la depuración.

export default Counter;
