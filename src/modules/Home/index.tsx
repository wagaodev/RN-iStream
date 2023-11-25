import React, { useEffect } from 'react';
import {
  RootState,
  setUserAction,
  useAppDispatch,
  useAppSelector,
} from '../../redux';

import * as S from './styles';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { name, email } = useAppSelector((state: RootState) => {
    return {
      name: state.home.name,
      email: state.home.email,
    };
  });

  const handleGetInfo = async () => await dispatch(setUserAction());

  useEffect(() => {
    handleGetInfo();
  }, [name, email]);

  return (
    <S.Container>
      <S.ContainerName>
        <S.Title>Olá {(!!name && name) || 'Mundo'}</S.Title>
        <S.Title>{email ? `Seu email é: ${email}` : ''}</S.Title>
      </S.ContainerName>
    </S.Container>
  );
};
