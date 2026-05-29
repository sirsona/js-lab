function TemperatureInput({ celsius, onChange }) {
  function handleChange(e) {
    const value = parseFloat(e.target.value);
    onChange(isNaN(value) ? 0 : value);
  }
  return (
    <div>
      <label>Temperature (°C): </label>

      <input type="text" onChange={handleChange} value={celsius} />
    </div>
  );
}

export default TemperatureInput;
