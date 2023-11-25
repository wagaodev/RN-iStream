import { api } from '../../../service/api';
import { AppDispatch } from '../../store';
import { setUser } from './slice';
import { TInitialState } from './types';

export const setUserAction = () => async (dispatch: AppDispatch) => {
  const response = await api.get('/users');
  const user = response.data[0];

  const result = dispatch(
    setUser({ name: user.name, email: user.email } as TInitialState),
  );

  return result.payload;
};
