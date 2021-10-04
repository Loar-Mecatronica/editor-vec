import { Dispatch, SetStateAction } from 'react';
import { AddEstationFormData } from './AddEstationForm.interfaces';
import { setEstation } from './AddEstationForm.requests';
export const handleEstationLineSubmit =
  (
    setModal: Dispatch<SetStateAction<boolean>>,
    onSuccess = (data: any) => {},
    onFail = (error: any) => {},
    editionMode: boolean
  ) =>
  (data: AddEstationFormData) => {
    if (!editionMode) {
      setEstation(data)
        .then((res) => onSuccess(res))
        .catch((e) => onFail(e));
    } else {
      alert('edition mode');
    }
  };
