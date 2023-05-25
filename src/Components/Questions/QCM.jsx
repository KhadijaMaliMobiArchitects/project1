import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './form.css';
import api from '../../config/api';
import apiEndpoints from '../../constants/apiEndpoints';


export default function App({ prop }) {
  function getRandom() {
    const floatRandom = Math.random()

    const difference = 99999999 - 100

    // random between 0 and the difference
    const random = Math.round(difference * floatRandom)

    const randomWithinRange = random + 100

    return randomWithinRange
  }
  const [nomberofQuestion, setnumberofQuestion] = useState(0);

  useEffect(() => {
    let listOfQuestions = Array.from(Array(nomberofQuestion).keys())
  }, [nomberofQuestion])

  let listOfQuestions = Array.from(Array(Number(nomberofQuestion)).keys())

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    setnumberofQuestion(data.nombreDeChoix);
    // console.log(data)

  };
console.log(prop);
  const onsub = (dat) => {
    dat.id = getRandom();
    dat.examid = prop.id;
    api.post(apiEndpoints.Questionscm, dat)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });


  };
  //   console.log(errors);

  let i = 1;



  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>

        <label className="label" htmlFor="nombre-de-choix">Nombre de choix:</label>
        <input className="input" type="number" id="nombre-de-choix" {...register("nombreDeChoix", { required: true })} />

        <button className="button" type="submit">Generate</button>
      </form>
      Please enter the Question and the possible answers and check the ones that are correct
      <form className="form" onSubmit={handleSubmit(onsub)}>
        <label className="label" htmlFor="nom-du-question">Nom du Question:</label>
        <input className="input" type="text" id="nom-du-question" {...register("nomDuQuestion")} />

        <label className="label" htmlFor="question">Question:</label>
        <input className="input" type="text" id="question" {...register("question")} />


        {listOfQuestions.map((question, index) => (
          <>
            <div className="flex flex-col mb-4">
              <label className="mb-1 font-bold" htmlFor={`nombrechoix${index}`}>Choix {index + 1}</label>
              <div className="flex items-center">
                <input className="w-full py-2 px-3 border border-gray-400 rounded-md" type="text" id={`nombre-de-choix-${index}`} {...register(`Choix${index + 1}`, { required: true })} />
                <div className="ml-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <input className='text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"' type="checkbox" name={`chooseCb-${index}`} {...register(`chooseCb-${index}`)} />
                </div>
              </div>
            </div>
          </>


        ))}

        <button className="button" type="submit">Submit</button>

      </form>


    </>
  );

}