const calculateString = (input: string, setError: (msg: string) => void, setResult: (val: number | null) => void) => {
    const inputStr = input.trim();

    if (!inputStr) {
      setError('Please enter some numbers first');
      setResult(null);
      return;
    }
  
    const items = inputStr.split(',').map((val) => val.trim()).filter(Boolean);
    const numbers = items.map((num) => Number(num));
  
    const invalidVal = items.find((val) => isNaN(Number(val)));
    if (invalidVal) {
      setError(`Invalid number found: ${invalidVal}`);
      setResult(null);
      return;
    }
  
    const total = numbers.reduce((a, b) => a + b, 0);
    setResult(total);
    setError('');
  };
  
  export default calculateString;