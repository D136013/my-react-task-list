import React from "react";
import { Box, Text, Image, Center } from '@chakra-ui/react'

export const AboutUsPage = () => {
  return (
    <div >
        <h1>
          <Center>
          <Text color="purple"  fontSize='32'> ¿Qué es mi producto?</Text></Center></h1>
        <p>
          <Center>
          <Text color={"purple.400"}>
        Tasks List es una plataforma web construida con la tecnologia React Js.
        </Text>
        </Center>
      </p>
      <h1>
        <Center>
        <Text color="purple"  fontSize='32'>¿Para que sirve? </Text>
        </Center></h1>
      <p>
        <Center>
        <Text color={"purple.400"}>
        Es un plataforma que nos servirà para llevar el control de todas
        aquellas tareas que se nos presenten en el día a día pero de una manera
        automatizada, es decir, que podremos añadir, eliminar y
        actualizar el estado de nuestras tareas. De tal manera que se
        conformemos nuestra propia lista de tareas y ver cuales de ellas nos
        faltan por realizar y las que ya fueron resueltas.
        </Text>
        </Center>
        </p>
      
      <h1> 
        <Center>
        <Text color="purple" fontSize='32'> Tecnologias usadas</Text>
        </Center> </h1>
        <Center>
        <Text color={"purple.500"}>
          React.js
          Javascript
          Chakra UI
        </Text>
        </Center>
        <Box display="flex" justifyContent="center" alignItems="center">
        <Image borderRadius='full'
  boxSize='150px' float="right" mx="auto" display="block"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrPwFcbdcOSpn-ZWDa4Hfi5puUUDhu91D1IMrU7hgI31Q3QUzKKfG8gfFV7VhjlhH6tDE&usqp=CAU"></Image>
        </Box>
    </div>
  );
};
