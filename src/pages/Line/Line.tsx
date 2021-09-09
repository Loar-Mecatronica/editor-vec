import { useParams } from 'react-router';
import { LineLayout } from './Lines.styles';
import { LineParams } from './Line.interfaces';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PAGE_ON } from '../../store/actions';

export const Line = () => {
  const dispatch = useDispatch();
  const { lineId } = useParams<LineParams>();
  useEffect(() => {
    dispatch({ type: PAGE_ON });
  }, [dispatch]);
  return <LineLayout>Linea:{lineId}</LineLayout>;
};
