import { ChakraProvider, Box } from '@chakra-ui/react';
import { Header } from './components/Header/Header';
import { Card } from './components/Card';
import { welcome } from './services/welcome';

 const App  = () => {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Header />
        <Card title="Faça o login" onButtonClick={welcome} />
      </Box>
    </ChakraProvider>
  );
}

export default App
