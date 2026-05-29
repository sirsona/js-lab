function TemperatureDisplay({ celsius }) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return (
    <div>
      <p>Celsius: {celsius.toFixed(1)}</p>
      <p>Fahrenheit: {fahrenheit.toFixed(1)}</p>
    </div>
  );
}

export default TemperatureDisplay;
