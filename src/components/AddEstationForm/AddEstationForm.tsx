import { InputForm } from '../InputForm/InputForm';
import {
  AddEstationFormLayout,
  AddFormHorizontalDivider,
  AddFormVerticalDivider,
} from './AddEstationForm.styles';
import {
  AddEstationFormData,
  AddEstationFormProps,
} from './AddEstationForm.interfaces';
import { useForm } from 'react-hook-form';
import { handleEstationLineSubmit } from './AddEstationForm.handlers';
import { SelectForm } from '../../components/SelectForm/SelectForm';
import { fetchComponentes } from './AddEstationForm.requests';
import { useEffect, useState } from 'react';
import { fetchLineas } from '../../pages/Stations/Stations.requests';
import { SpecialSelect } from '../SpecialSelect/SpecialSelect';

export const AddEstationForm = (props: AddEstationFormProps) => {
  const { register, handleSubmit, watch } = useForm<AddEstationFormData>({
    defaultValues: { linea: 22 },
  });
  const { refForm } = props;
  const [selectLineas, setSelectLineas] = useState<any>([]);
  const [componentsOptions, setComponentOptions] = useState<
    { label: string; value: string; onClick?: () => void }[]
  >([]);

  useEffect(() => {
    fetchLineas(2).then((response) => {
      if (response.mensaje === 'OK')
        setSelectLineas(
          response.filtros.map((linea) => {
            return { label: linea.nombre, value: linea.id };
          })
        );
    });
  }, []);
  const lineChanges = watch().linea;
  useEffect(() => {
    fetchComponentes(2, lineChanges).then((res) => {
      if (res.mensaje === 'OK') {
        const newValue = res.filtros.map((filter: any) => {
          return { label: filter.nombre, value: parseInt(filter.id) };
        });
        setComponentOptions(newValue);
      }
    });
  }, [lineChanges]);

  return (
    <AddEstationFormLayout
      ref={refForm}
      onSubmit={handleSubmit(handleEstationLineSubmit)}
    >
      <AddFormHorizontalDivider>
        <InputForm name="name" label="Nombre" register={register('nombre')} />
        <AddFormVerticalDivider />
        <InputForm name="titulo" label="Titulo" register={register('titulo')} />
        <SelectForm
          name="linea"
          label="linea"
          register={register('linea')}
          options={selectLineas}
        />
        <AddFormVerticalDivider />
        <SelectForm
          name="componente"
          label="componente"
          options={componentsOptions}
          register={register('componente')}
        />

        <AddFormVerticalDivider />
        <InputForm
          name="ipScanner"
          label="ip del Scanner"
          disabled={watch().tipo === 'Probadora'}
          register={register('ipScanner')}
          type="ip"
        />
        <AddFormVerticalDivider />
        <SelectForm
          name="Tipo"
          label="Tipo"
          register={register('tipo')}
          options={[
            { label: 'Linea', value: 'Linea' },
            { label: 'Probadora', value: 'Probadora' },
            { label: 'Subensamble', value: 'Subensamble' },
          ]}
        />
      </AddFormHorizontalDivider>
      <AddFormHorizontalDivider>
        <InputForm
          name="bypass"
          label="bypass"
          register={register('bypass')}
          type="checkbox"
          disabled={watch().tipo === 'Probadora'}
        />
        <AddFormVerticalDivider />
        <SelectForm
          name="idEstacionSub"
          label="Estación de Subensambles"
          register={register('idEstacionSub')}
          options={[{ label: 'estacion1', value: '1' }]}
        />
        <AddFormVerticalDivider />
        <InputForm
          name="componenteStartIndex"
          label="inicio de lectura del componente"
          type="number"
          disabled={watch().tipo === 'Probadora'}
          register={register('componenteStartIndex')}
        />
        <AddFormVerticalDivider />
        <InputForm
          name="ComponenteLength"
          label="Longitud de lectura del componente"
          type="number"
          disabled={watch().tipo === 'Probadora'}
          register={register('componentLength')}
        />
        <SpecialSelect
          label="Defectos"
          name="Defectos"
          options={[
            { label: 'NO PASA FUNCIONAL', value: 'NO PASA FUNCIONAL' },
            { label: 'PRUEBA NO ENCONTRADA', value: 'PRUEBA NO ENCONTRADA' },
            { label: 'PRUEBA FALLÓ', value: 'PRUEBA FALLÓ' },
          ]}
        />
      </AddFormHorizontalDivider>
    </AddEstationFormLayout>
  );
};
