import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import { render } from 'react-dom';

const root = document.getElementById('root');

render(<ColorModeScript initialColorMode="light" />, root);
