import { Dispatch, SetStateAction } from 'react';
import { AddEstationFormData } from './AddEstationForm.interfaces';
export const handleEstationLineSubmit =
  (
    setModal: Dispatch<SetStateAction<boolean>>,
    onSuccess = () => {},
    onFail = () => {}
  ) =>
  (data: AddEstationFormData) => {
    console.log(data);
    setModal(false);
    onSuccess();
  };
