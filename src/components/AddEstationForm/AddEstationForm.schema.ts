import * as yup from 'yup';
export const AddEstationFormSchema = yup.object().shape({
  nombre: yup.string().required('Este campo es obligatorio'),
  titulo: yup.string().required('Este campo es obligatorio'),
  linea: yup.number().required('Este campo es obligatorio'),
  componente: yup.string().required('Este campo es obligatorio'),
  ipScanner: yup.string().required('Este campo es obligatorio'),
  tipo: yup.string().required('Este campo es obligatorio'),
  bypass: yup.boolean().required('Este campo es obligatorio'),
  idEstacionSub: yup
    .string()
    .nullable(true)
    .when('tipo', {
      is: (tipo: string) => tipo !== 'Probadora',
      then: yup.string().required('Este campo es obligatorio'),
    }),
  componenteStartIndex: yup.string().when('tipo', {
    is: (tipo: string) => tipo !== 'Probadora',
    then: yup.string().required('Este campo es obligatorio'),
    otherwise: yup.string().notRequired(),
  }),
  componentLength: yup
    .string()
    .nullable(true)
    .typeError('Debes introducir un número')
    .when('tipo', {
      is: (tipo: string) => tipo !== 'Probadora',
      then: yup.string().required('Este campo es obligatorio'),
    }),
  defectos: yup
    .array()
    .min(1, 'Debe insertar al menos un defecto')
    .required('Este campo es obligatorio'),
});
