const Checkbox = ({ label, value, isChecked, onChange, ...rest }) => {
  return (
    <label>
      <input type="checkbox" checked={isChecked} value={value} onChange={onChange} {...rest} />
      {label}
    </label>
  );
};

export default Checkbox;
