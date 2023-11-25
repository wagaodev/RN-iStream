import React, { useEffect } from 'react';
import { api } from '../../service/api';
import * as S from './styles';

type TData = {
  id: number;
  name: string;
  email: string;
}[];

export const Home = () => {
  const [data, setData] = React.useState<TData>([]);

  const handleApiGet = async () => {
    const response = await api.get('/users');
    setData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    handleApiGet();
  }, []);

  return (
    <S.Container>
      {data.map(item => (
        <S.ContainerName key={item.id}>
          <S.Title>Olá {item.name}</S.Title>
        </S.ContainerName>
      ))}
    </S.Container>
  );
};
