import React from 'react';

import * as S from './styles';
import { getUsers } from '../../services/userService';
import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator, Text } from 'react-native';
import { TUser } from './types';

export const Home = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    // refetchInterval: 10000, // Caso eu queira que a cada 10 segundos ele faça uma nova requisição, famoso polling.
  });

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error ao buscar usuários</Text>;

  return (
    <S.Container>
      {users &&
        users.map((user: TUser) => (
          <S.ContainerName key={user.id}>
            <S.Title>{user.name}</S.Title>
            <S.Title>{user.email}</S.Title>
          </S.ContainerName>
        ))}
    </S.Container>
  );
};
