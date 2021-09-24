import { InputForm } from '../InputForm/InputForm';
import { AddComponentFormLayout } from './AddComponentForm.styles';
import {
  AddComponentFormData,
  AddComponentFormProps,
} from './AddComponentForm.interfaces';
import { useForm } from 'react-hook-form';
import { handleComponentLineSubmit } from './AddComponentForm.handlers';
export const AddComponentForm = (props: AddComponentFormProps) => {
  const { register, handleSubmit } = useForm<AddComponentFormData>();
  const { refForm } = props;
  return (
    <AddComponentFormLayout
      ref={refForm}
      onSubmit={handleSubmit(handleComponentLineSubmit)}
    >
      <InputForm name="name" label="Nombre" register={register('name')} />
    </AddComponentFormLayout>
  );
};
