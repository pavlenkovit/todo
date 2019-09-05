import React, { useState } from 'react';
import styles from './Form.module.scss';
import { IDispatchFromPropsForm } from './Form.container';

const Form: React.SFC<IDispatchFromPropsForm> = ({ addTask }) => {
  const [value, onChange] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const onSubmit = () => {
    if (value === '') {
      return;
    }
    addTask(value);
    onChange('');
  };

  return (
    <div className={styles.container}>
      <input type="text" onChange={handleChange} value={value} className={styles.input} />
      <button onClick={onSubmit} className={styles.button}>Add</button>
    </div>
  );
};

export default Form;
