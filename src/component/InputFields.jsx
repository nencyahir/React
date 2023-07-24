import React from 'react';

function InputFields({ values, onChangeInput }) {
  return (
    <>
      <input
        type="text"
        value={values.first_name}
        onChange={(event) => onChangeInput(event, 'first_name')}
        placeholder="First Name"
        required
      />
      <input
        type="email"
        value={values.email}
        onChange={(event) => onChangeInput(event, 'email')}
        placeholder="Email"
        required
      />
      <input
        type="text"
        value={values.avatar}
        onChange={(event) => onChangeInput(event, 'avatar')}
        placeholder="Avatar URL"
        required
      />
    </>
  );
}

export default InputFields;
