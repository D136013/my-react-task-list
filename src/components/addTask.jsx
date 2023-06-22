import React, { useState } from "react";
import { Box, Input, Button, Text, Image } from '@chakra-ui/react';


const initialState = {
  name: "",
  description: "",
};

export const AddTask = ({ onClickAdd }) => {
  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    onClickAdd(data);
    setData(initialState);
  };
   
  return (

    <Box bg='' w='95%' p={4} color='white' padding='5' m="15" textAlign='center'>
      <Text color={"purple"} bg='' fontSize='4xl' m='25'>To do App</Text>  
      <form
        onSubmit={(e) => {
          handleClick(e);
        }}
      >
        <Input
          textColor='blue'
          bg='white'
          errorBorderColor='blue'
          isInvalid
          type="text"
          className="form-control mr-3"
          placeholder="escribe una nueva tarea *"
          name="name"
          value={data.name}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Input
          textColor='blue'
          bg='white'
          isInvalid
          errorBorderColor='blue'
          mt='2'
          type="text"
          className="form-control"
          name="description"
          placeholder="escribe una descripcion"
          value={data.description}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Button type="submit" colorScheme='purple' size='xs' w="99%" m='2'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            </Button>
            <Box display="flex" justifyContent="center" alignItems="center">
            <Image borderRadius='full'
               boxSize='150px'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84dn0zft1N-mtdh7xvTgAWoxmfCvEkdTbbQ&usqp=CAU"></Image>
            </Box>
        
      </form>
    </Box>
  );     
}