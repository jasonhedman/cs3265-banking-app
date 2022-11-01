import React from 'react';

import { ChakraProvider } from '@chakra-ui/react'
import Layout from './components/Layout';
import Router from './components/Router';

const App : React.FC = () => {
  return (
    <ChakraProvider>
      <Layout>
        <Router />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
