import React from "react";
import { Box, Text, Center, Image } from '@chakra-ui/react';

export const HomePage = () => {
  return (
    <div>  
      <Box bg='' w='95%' h='5%' p={4} color='white' padding='5' m="5">
        <h1>
          <Center>
          <Text color="purple"  fontSize='32' >¿Qué es mi producto?</Text>
          </Center> 
        </h1>
        <p>
          <Center>
          <Text color={"purple.400"}>
            Lista de tareas
            </Text>
          </Center>
        </p> 
        <p> 
          <Center>  
          <Text color={"purple.400"}>
            Hola, bienvenidos a nuestra app.
           </Text>
          </Center>
        </p>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
        <Image borderRadius='full'
  boxSize='150px' w="600px" h="250px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTurizb8bH0C9D2EwEyllKoOlZ1hPP_F4KRcQ&usqp=CAU"></Image>
        </Box>
    </div>
  );
};
