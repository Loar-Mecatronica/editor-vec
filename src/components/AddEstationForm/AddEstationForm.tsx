import { InputForm } from '../InputForm/InputForm';
import { AddEstationFormLayout } from './AddEstationForm.styles';
import {
  AddEstationFormData,
  AddEstationFormProps,
} from './AddEstationForm.interfaces';
import { useForm } from 'react-hook-form';
import { handleEstationLineSubmit } from './AddEstationForm.handlers';
export const AddEstationForm = (props: AddEstationFormProps) => {
  const { register, handleSubmit } = useForm<AddEstationFormData>();
  const { refForm } = props;
  return (
    <AddEstationFormLayout
      ref={refForm}
      onSubmit={handleSubmit(handleEstationLineSubmit)}
    >
      <InputForm name="name" label="Nombre" register={register('name')} />
    </AddEstationFormLayout>
  );
};
