import { InputForm } from '../InputForm/InputForm';
import {
  AddCompButton,
  AddEstationFormLayout,
  AddFormHorizontalDivider,
  AddFormVerticalDivider,
  SaveCompButton,
} from './AddEstationForm.styles';
import { AddEstationFormProps } from './AddEstationForm.interfaces';
import { useForm } from 'react-hook-form';
import { handleEstationLineSubmit } from './AddEstationForm.handlers';
import { SelectForm } from '../../components/SelectForm/SelectForm';
import {
  fetchComponentes,
  fetchSubEstacion,
  setComponent,
} from './AddEstationForm.requests';
import { useCallback, useEffect, useState } from 'react';
import { fetchLineas } from '../../pages/Stations/Stations.requests';
import { SpecialSelect } from '../SpecialSelect/SpecialSelect';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddEstationFormSchema } from './AddEstationForm.schema';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faPlus, faSave } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';

export const AddEstationForm = (props: AddEstationFormProps) => {
  const {
    refForm,
    setModal,
    successCallBack,
    errorCallBack,
    defaultValues,
    editMode = false,
  } = props;
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<any>({
    defaultValues: { linea: 22, ...defaultValues },
    resolver: yupResolver(AddEstationFormSchema),
  });
  const [defaultComponent, setDefaultComponent] = useState('');
  const [compText, setCompText] = useState(false);
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
      if (response.mensaje === 'OK') {
        setSelectLineas(
          response.filtros.map((linea) => {
            return { label: linea.nombre, value: linea.id };
          })
        );
        if (defaultValues) {
          setValue('linea', defaultValues.linea);
          setValue('componente', defaultValues.componente);
        }
      }
    });
  }, [defaultValues, setValue]);
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
      if (defaultValues) {
        setDefaultComponent(defaultValues.componente);
        setValue('idEstacionSub', defaultValues.idEstacionSub);
        setValue('componente', defaultValues.componente);
      }
    });
  }, [lineChanges, defaultValues, setValue]);

  useEffect(() => {
    fetchSubEstacion(componentChanges, lineChanges).then((res) => {
      if (res.mensaje === 'OK') {
        setSubenOptions(
          res.filtros.map((v) => {
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
  useEffect(() => {
    if (defaultValues) {
      setDefectDefault(
        defaultValues.defectos.map((d: string) => {
          return { label: d, value: d };
        })
      );
    }
  }, [defaultValues]);
  return (
    <AddEstationFormLayout
      ref={refForm}
      onSubmit={handleSubmit(
        handleEstationLineSubmit(
          setModal as any,
          successCallBack,
          errorCallBack,
          editMode
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
        {!compText && (
          <SelectForm
            name="componente"
            label="componente"
            error={errors.componente?.message}
            options={
              watch().tipo === 'Probadora'
                ? [
                    { label: 'Alfi', value: 1 },
                    { label: 'Checker', value: 2 },
                  ]
                : componentsOptions
            }
            register={register('componente')}
          />
        )}
        {compText && watch().tipo !== 'Probadora' && (
          <InputForm
            name="componente"
            error={errors.componente?.message}
            label="componente"
            register={register('componente')}
            type="ip"
          />
        )}
        {watch().tipo !== 'Probadora' && (
          <div
            style={{
              display: 'flex',
              fontSize: '15px',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <small style={{ margin: '0px', padding: 0 }}>
              {compText ? 'Agregar componente' : 'Seleccionar un componente'}
            </small>
            <AddCompButton
              data-tip
              data-for={'addCompButton'}
              onClick={() => {
                if (!compText) {
                  setValue('componente', '');
                } else {
                  setValue('componente', defaultComponent);
                }
                setCompText((old) => !old);
              }}
            >
              <FontAwesomeIcon icon={compText ? faAngleLeft : faPlus} />
            </AddCompButton>
            {compText && (
              <>
                <SaveCompButton
                  data-tip
                  data-for={'saveCompButton'}
                  onClick={() => {
                    setComponent(watch().linea, watch().componente, 1)
                      .then((response) => {
                        if (response.Data.mensaje === 'OK') {
                          setComponentOptions(
                            response.Data.filtros.map((v: any) => {
                              return { label: v.nombre, value: v.id };
                            })
                          );
                        }

                        console.log(
                          'componente',
                          (componentsOptions as any).find(
                            (f: any) => f.label === 'TESTER'
                          )
                        );
                        alert('componente creado correctamente');
                      })
                      .catch((e) => {
                        console.log(e);
                        alert('error en el servidor');
                      });
                    setCompText((old) => !old);
                  }}
                >
                  <FontAwesomeIcon icon={faSave} />
                </SaveCompButton>
                <ReactTooltip id="saveCompButton" place="right" effect="solid">
                  Guardar Componente
                </ReactTooltip>
              </>
            )}
            <ReactTooltip id="addCompButton" place="right" effect="solid">
              {!compText
                ? 'Agregar componente'
                : 'Seleccionar un componente almacenado'}
            </ReactTooltip>
          </div>
        )}
        <AddFormVerticalDivider />
        <InputForm
          name="ipScanner"
          error={errors.ipScanner?.message}
          label="ip del Scanner"
          disabled={watch().tipo === 'Probadora' && watch().componente !== '2'}
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
          disabled={typeChanges !== 'Linea'}
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
