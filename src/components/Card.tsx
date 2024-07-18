import { Center, Box, Input } from '@chakra-ui/react';
import { CustomButton } from './CustomButton';

interface ICard {
  title: string;
  onButtonClick: () => void;
}

export const Card = ({ title, onButtonClick }: ICard) => {
  return (
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
      <Center>
        <h1>{title}</h1>
      </Center>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Center>
        <CustomButton onClick={onButtonClick}>
          Button
        </CustomButton>
      </Center>
    </Box>
  );
};