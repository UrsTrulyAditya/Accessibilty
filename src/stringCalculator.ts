const calculateString = (input: string, setResult: (val: number | null) => void) => {
    const inputStr = input.trim();

    if (!inputStr) {
      setResult(null);
      return;
    }
  
    const items = inputStr.split(',').map((val) => val.trim()).filter(Boolean);
    const numbers = items.map((num) => Number(num));
  
    const total = numbers.reduce((a, b) => a + b, 0);
    setResult(total);
  };
  
  export default calculateString;