import React,{useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import QCM from "../Components/Questions/QCM";
import DNDpictures from "../Components/Questions/DNDpictures";
import DNDtext from "../Components/Questions/DNDtext";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Admin({ prop }) {
  const [tokentorender, setTokentorender] = useState(0);
  console.log(tokentorender);
  
  return (
    <div class="flex justify-center">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            
          >
            <button
              className={
                "bg-gray-100 text-gray-900 text-gray-700 block px-4 py-2 text-sm"
              }
              onClick={() => setTokentorender(1)}
            >
              QCM
            </button>

            <button
              className={
                "bg-gray-100 text-gray-900 text-gray-700 block px-4 py-2 text-sm"
              }
              onClick={() => setTokentorender(2)}
            >
              DNDpictures
            </button>
            <button
              className={
                "bg-gray-100 text-gray-900 text-gray-700 block px-4 py-2 text-sm"
              }
              onClick={() => setTokentorender(3)}
            >
              DNDtext
            </button>
            <button
              className={
                "bg-gray-100 text-gray-900 text-gray-700 block px-4 py-2 text-sm"
              }
              onClick={() => setTokentorender(1)}
            >
              QCM WITH PICS
            </button>
          </Select>
        </FormControl>
      </Box>
      <div class="grid place-items-center h-screen">
        {tokentorender === 1 ? <QCM /> : null}
        {tokentorender === 2 ? <DNDpictures /> : null}
        {tokentorender === 3 ? <DNDtext prop={prop} /> : null}
      </div>
    </div>
  );
}
