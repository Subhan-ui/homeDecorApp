import React from 'react';

import ComponentWrapper from '../../components/componentWrapper/ComponentWrapper';
import Input from '../../components/molecules/input/Input';
import Button from '../../components/molecules/button/Button';
import {useAddress} from './useAddress';
import {addressInputs} from '../../constants/inputs';

const Address = () => {
  const {
    title,
    data,
    initialFetched,
    handleChange,
    handleSubmit,
    handleUpdate,
    handleDelete,
  } = useAddress();
  const inputs = addressInputs(data);

  return (
    <ComponentWrapper text="Address" filter={false}>
      <>
        {inputs.map(input => (
          <Input
            title={input.title}
            key={input.id}
            placeholder={input.placeholder}
            marginTop={input.marginTop}
            value={input.value}
            onChange={text => handleChange(input.name, text)}
          />
        ))}
        {initialFetched && (
          <Button
            text={title}
            marginTop={34}
            onPress={title === 'Update' ? handleUpdate : handleSubmit}
          />
        )}
        {title === 'Update' && (
          <Button text={'Delete'} marginTop={34} onPress={handleDelete} />
        )}
      </>
    </ComponentWrapper>
  );
};

export default Address;
