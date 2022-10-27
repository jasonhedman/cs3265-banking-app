import React from 'react';

import { ChakraProvider } from '@chakra-ui/react'
import Layout from './components/Layout';
import AuthRouter from './components/AuthRouter';

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <AuthRouter />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
