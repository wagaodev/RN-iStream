import { getUsers } from '../../../services/userService';
import { AppDispatch } from '../../store';
import { setUser } from './slice';
import { TInitialState } from './types';

export const setUserAction = () => async (dispatch: AppDispatch) => {
  const users = await getUsers();

  if (users && users.length > 0) {
    const user = users[0];
    const result = dispatch(
      setUser({ name: user.name, email: user.email } as TInitialState),
    );
    return result.payload;
  }
};
