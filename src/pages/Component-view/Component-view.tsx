import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { PAGE_ON } from '../../store/actions';
import { ComponentViewLayout } from './Component-view.styles';

export const ComponentView = () => {
  const dispatch = useDispatch();
  const { componentId } = useParams<any>();
  useEffect(() => {
    dispatch({ type: PAGE_ON });
  }, [dispatch]);
  return <ComponentViewLayout>{componentId}</ComponentViewLayout>;
};
