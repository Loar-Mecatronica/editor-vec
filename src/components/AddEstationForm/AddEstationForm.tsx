import { InputForm } from '../InputForm/InputForm';
import {
  AddEstationFormLayout,
  AddFormHorizontalDivider,
  AddFormVerticalDivider,
} from './AddEstationForm.styles';
import { AddEstationFormProps } from './AddEstationForm.interfaces';
import { useForm } from 'react-hook-form';
import { handleEstationLineSubmit } from './AddEstationForm.handlers';
import { SelectForm } from '../../components/SelectForm/SelectForm';
import { fetchComponentes, fetchSubEstacion } from './AddEstationForm.requests';
import { useCallback, useEffect, useState } from 'react';
import { fetchLineas } from '../../pages/Stations/Stations.requests';
import { SpecialSelect } from '../SpecialSelect/SpecialSelect';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddEstationFormSchema } from './AddEstationForm.schema';

export const AddEstationForm = (props: AddEstationFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<any>({
    defaultValues: { linea: 22 },
    resolver: yupResolver(AddEstationFormSchema),
  });
  const { refForm, setModal, successCallBack, errorCallBack } = props;
  const [selectLineas, setSelectLineas] = useState<any>([]);
  const [defectDefault, setDefectDefault] =
    useState<{ label: string; value: string }[]>();
  const [componentsOptions, setComponentOptions] = useState<
    { label: string; value: string; onClick?: () => void }[]
  >([]);
  const [subenOptions, setSubenOptions] = useState<
    { label: string; value: string; onClick?: () => void }[]
  >([]);

  const dataHandler = useCallback(
    (data) => {
      setValue(
        'defectos',
        data.map((d: any) => d.value)
      );
    },
    [setValue]
  );

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
  const componentChanges = watch().componente;
  const typeChanges = watch().tipo;
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

  useEffect(() => {
    fetchSubEstacion(componentChanges, lineChanges).then((res) => {
      if (res.mensaje === 'OK') {
        setSubenOptions(
          res.filtros.map((v) => {
            console.log(v);
            return { label: v.nombre, value: v.id };
          })
        );
      }
    });
  }, [lineChanges, componentChanges]);

  useEffect(() => {
    if (typeChanges === 'Linea')
      setDefectDefault([
        { label: 'PRUEBA NO ENCONTRADA', value: 'PRUEBA NO ENCONTRADA' },
        { label: 'PRUEBA FALLÓ', value: 'PRUEBA FALLÓ' },
      ]);
    else if (typeChanges === 'Subensamble')
      setDefectDefault([
        { label: 'NO PASA FUNCIONAL', value: 'NO PASA FUNCIONAL' },
      ]);
    else if (typeChanges === 'Probadora') setDefectDefault([]);
  }, [typeChanges]);

  return (
    <AddEstationFormLayout
      ref={refForm}
      onSubmit={handleSubmit(
        handleEstationLineSubmit(
          setModal as any,
          successCallBack,
          errorCallBack
        )
      )}
    >
      <AddFormHorizontalDivider>
        <InputForm
          name="name"
          label="Nombre"
          register={register('nombre')}
          error={errors.nombre?.message}
        />
        <AddFormVerticalDivider />
        <InputForm
          error={errors.titulo?.message}
          name="titulo"
          label="Titulo"
          register={register('titulo')}
        />
        <SelectForm
          name="linea"
          label="linea"
          error={errors.linea?.message}
          register={register('linea')}
          options={selectLineas}
        />
        <AddFormVerticalDivider />
        <SelectForm
          name="componente"
          label="componente"
          error={errors.componente?.message}
          options={componentsOptions}
          register={register('componente')}
        />

        <AddFormVerticalDivider />
        <InputForm
          name="ipScanner"
          error={errors.ipScanner?.message}
          label="ip del Scanner"
          disabled={watch().tipo === 'Probadora'}
          register={register('ipScanner')}
          type="ip"
        />
        <AddFormVerticalDivider />
        <SelectForm
          name="Tipo"
          label="Tipo"
          error={errors.tipo?.message}
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
          error={errors.bypass?.message}
        />
        <AddFormVerticalDivider />
        <SelectForm
          disabled={typeChanges === 'Probadora'}
          name="idEstacionSub"
          label="Estación de Subensambles"
          register={register('idEstacionSub')}
          options={subenOptions}
          error={errors.idEstacionSub?.message}
        />
        <AddFormVerticalDivider />
        <InputForm
          name="componenteStartIndex"
          label="inicio de lectura del componente"
          type="number"
          disabled={watch().tipo === 'Probadora'}
          register={register('componenteStartIndex')}
          error={errors.componenteStartIndex?.message}
        />
        <AddFormVerticalDivider />
        <InputForm
          name="ComponenteLength"
          label="Longitud de lectura del componente"
          type="number"
          disabled={watch().tipo === 'Probadora'}
          register={register('componentLength')}
          error={errors.componentLength?.message}
        />
        <SpecialSelect
          onChangeData={dataHandler}
          label="Defectos"
          name="Defectos"
          value={defectDefault}
          error={errors.defectos?.message}
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
