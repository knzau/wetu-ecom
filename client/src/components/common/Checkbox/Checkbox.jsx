import './Checkbox.scss';
const Checkbox = ({ label, value, isChecked, onChange, ...rest }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" checked={isChecked} value={value} onChange={onChange} {...rest} />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
