import axios from 'axios';

const request = axios.get('https://api.thecatapi.com/v1/breeds');

export const getAllBreeds = () => (
  {
      type: 'GET_ALL_BREEDS',
      payload: {
          request: {
              url: 'https://api.thecatapi.com/v1/breeds'
          }
      },
  })

export const addBreed = text => ({
  type: 'ADD_BREED',
  text
})

export const removeBreed = breed => ({
  type: 'REMOVE_BREED',
  breed
})
