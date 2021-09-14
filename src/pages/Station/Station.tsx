import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { PAGE_ON } from '../../store/actions';
import { StationLayout } from './Station.styles';

export const StationView = () => {
  const dispatch = useDispatch();
  const { stationId } = useParams<any>();
  useEffect(() => {
    dispatch({ type: PAGE_ON });
  }, [dispatch]);
  return <StationLayout>{stationId}</StationLayout>;
};
