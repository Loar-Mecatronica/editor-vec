import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { AddEstationForm } from '../../components/AddEstationForm/AddEstationForm';
import { PAGE_ON } from '../../store/actions';
import {
  StationLayout,
  StationLeft,
  StationRight,
  StationSubTitle,
  StationTitle,
} from './Station.styles';

export const StationView = () => {
  const dispatch = useDispatch();
  const { stationId } = useParams<any>();
  useEffect(() => {
    dispatch({ type: PAGE_ON });
  }, [dispatch]);
  return (
    <StationLayout>
      <StationLeft>
        <StationTitle>Nombre de la estación: </StationTitle>
        <StationSubTitle>{stationId}</StationSubTitle>
      </StationLeft>
      <StationRight>
        <AddEstationForm />
      </StationRight>
    </StationLayout>
  );
};
