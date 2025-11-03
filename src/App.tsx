import { useState } from 'react';
import calculateString from './stringCalculator';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    calculateString(input, setError, setResult);
  };
  
  return (
    <main
      style={{
        padding: '20px',
        backgroundColor: '#fff',
        color: '#333',
        maxWidth: '700px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}
      aria-labelledby="title"
    >
      <h1 id="title">String Calculator</h1>

      <img
        src='https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        width={600}
        height={400}
        alt='String calculator'
      />

      <h2 style={{ fontSize: '20px' }}>Enter numbers</h2>

      <label htmlFor="numbers" style={{ display: 'block', fontWeight: 'bold' }}>
        Enter numbers (comma-separated):
      </label>

      <textarea
        id="numbers"
        placeholder='Enter numbers'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-describedby={error ? 'error' : result !== null ? 'result' : undefined}
        style={{ margin: '10px 0', color: '#333' }}
      />

      <button
        onClick={handleCalculate}
        style={{
          padding: '10px',
          backgroundColor: '#076888',
          color: '#fff',
          border: 'none',
        }}
        onFocus={(e) => {
          e.currentTarget.style.outline = '3px solid #005f7f';
        }}
        onBlur={(e) => {
          e.currentTarget.style.outline = 'none';
        }}
      >
        Calculate
      </button>

      {result !== null && (
        <p style={{ color: 'green'}} role="status" aria-live="polite">
          Result: {result}
        </p>
      )}

      {error && (
        <div
          role="alert"
          aria-live="assertive"
          style={{ color: '#d32f2f', marginTop: '15px', fontWeight: 'bold' }}
        >
          <p>{error}</p>
        </div>
      )}
    </main>
  );
};

export default App;
