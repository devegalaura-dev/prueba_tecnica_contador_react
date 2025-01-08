import { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <div> {count} </div>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrementar
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          Incrementar
        </button>
        <button onClick={() => setCount(0)}>
                Resetear
            </button>
        </div>
    );
}