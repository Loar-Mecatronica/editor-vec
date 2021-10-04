import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { AddEstationForm } from '../../components/AddEstationForm/AddEstationForm';
import { PAGE_ON } from '../../store/actions';
import {
  SaveButton,
  StationLayout,
  StationLeft,
  StationRight,
  StationSubTitle,
  StationTitle,
} from './Station.styles';
import { fetchEstacion } from './Station.requests';
import { Spinner } from '../../components/Spinner/Spinner';
import { useClipboard } from 'use-clipboard-copy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';

export const StationView = () => {
  const dispatch = useDispatch();
  const [editValues, setEditValues] = useState<any>(null);
  const [stationName, setStationName] = useState('');
  const { stationId } = useParams<any>();
  const refForm = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const clipboard = useClipboard();
  useEffect(() => {
    fetchEstacion(stationId)
      .then((res) => {
        if (res.mensaje === 'OK') {
          setEditValues(res.estacion);
          setStationName(res.estacion.nombre);
        }
      })
      .catch((e) => console.log(e));
  }, [stationId]);

  useEffect(() => {
    dispatch({ type: PAGE_ON });
  }, [dispatch]);
  return (
    <>
      <Spinner active={loading} />
      <StationLayout>
        <StationLeft>
          <StationTitle>Nombre de la estación: </StationTitle>
          <StationSubTitle>{stationName}</StationSubTitle>
          {editValues?.tipo === 'Linea' && (
            <div>
              <StationSubTitle style={{ fontSize: '20px' }}>
                Ruta Productiva: http://10.12.138.37/Modeloes/General?id=
                {stationId}
              </StationSubTitle>
              <FontAwesomeIcon
                onClick={() =>
                  clipboard.copy(`http://10.12.138.37/Modeloes/General?id=
                ${stationId}`)
                }
                icon={faClone}
              />
            </div>
          )}
        </StationLeft>
        <StationRight>
          {editValues && (
            <AddEstationForm
              editMode={true}
              refForm={refForm}
              defaultValues={editValues}
              loading={loading}
            />
          )}
          <SaveButton
            onClick={() => {
              setLoading(true);
              refForm.current?.requestSubmit();
            }}
          >
            Guardar
          </SaveButton>
        </StationRight>
      </StationLayout>
    </>
  );
};
