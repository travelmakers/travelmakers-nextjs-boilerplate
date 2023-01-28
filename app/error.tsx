'use client';

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => (
  <div>
    <h2>{error.name}</h2>
    <div>
      <p>{error.message}</p>
    </div>
    <button type="button" onClick={() => reset()}>
      Try again
    </button>
  </div>
);

export default GlobalError;
