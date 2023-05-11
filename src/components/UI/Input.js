import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/*spread operator ensures that all key value pairs are added as props to input*/}
      <input {...props.input} />
    </div>
  );
};

export default Input;