import { Button } from '@chakra-ui/react';

interface CustomButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const CustomButton = ({ onClick, children }: CustomButtonProps) => {
  return (
    <Button onClick={onClick} colorScheme="teal" size="sm" width="100%" marginTop="5px">
      {children}
    </Button>
  );
};