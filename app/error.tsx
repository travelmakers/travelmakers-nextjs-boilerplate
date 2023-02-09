'use client';

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => (
  <div>
    <div>
      <p>
        {error.name}: {error.message}
      </p>
    </div>
    <button type="button" onClick={() => reset()}>
      Try again
    </button>
  </div>
);

export default GlobalError;
