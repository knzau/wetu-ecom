import './RadioGroup.scss';

const RadioGroup = ({ radioOptions, groupClassName, handleChange, ...rest }) => {
  return (
    <div className={`${groupClassName} radio-group`}>
      {radioOptions.map((option) => {
        return (
          <div className="radio-btn__wrapper" key={option.id} onChange={handleChange}>
            <input type="radio" id={option.id} name={option.name} value={option.value} {...rest} />
            {option.showLabel && <label htmlFor="html">{option.label}</label>}
          </div>
        );
      })}
    </div>
  );
};

export default RadioGroup;
