import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {
  DndContext,
  closestCenter
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { useEffect, useState } from 'react';
import { SortableItem } from './SortableItem';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import api from '../../config/api';
import apiEndpoints from '../../constants/apiEndpoints';

const baseURL = " http://localhost:3000/questiondndtext";




function App(prop) {
  ///// random id generator 
  function getRandom() {
    const floatRandom = Math.random()

    const difference = 99999999 - 100

    // random between 0 and the difference
    const random = Math.round(difference * floatRandom)

    const randomWithinRange = random + 100

    return randomWithinRange
  }

  //////////////////////////////

  console.log(prop.prop.id);
  const [languages, setLanguages] = useState([]);
  console.log(languages)
  const [finalresult, setFinalresult] = useState({});




  const [nomberofQuestion, setnumberofQuestion] = useState(0);
  // console.log(nomberofQuestion)
  useEffect(() => {
    let listOfQuestions = Array.from(Array(nomberofQuestion).keys())
  }, [nomberofQuestion])

  useEffect(() => {
    setFinalresult({ ...finalresult, 'CorrectOrder': languages });

  }, [languages])

  let listOfQuestions = Array.from(Array(Number(nomberofQuestion)).keys())
  // console.log(listOfQuestions)

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    setnumberofQuestion(data.nombreDeChoix);


    // console.log(data)

  };

  const onsub = (dat) => {

    console.log(dat)

    setLanguages(Object.keys(dat)
      .filter(key => key.startsWith("Choix"))
      .map(key => dat[key]))

    dat.id = getRandom();
    dat.examid = prop.prop.id;

    console.log(dat);
    setFinalresult(dat);

    /////////////////////////

  //   api.post(apiEndpoints.Questions, dat)
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });

  //   console.log(finalresult);


  // };


  //   console.log(errors);

  let i = 1;




}

  function postq (quest) {

    api.post(apiEndpoints.Questions, quest)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });

  console.log(quest);


  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>

        <label className="label" htmlFor="nombre-de-choix">Nombre de choix:</label>
        <input min="1" className="input" type="number" id="nombre-de-choix" {...register("nombreDeChoix", { required: true })} />

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
              </div>
            </div>
          </>


        ))}

        <button className="button" style={{ color: 'white' }} type="submit">Submit</button>

      </form>

      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <Container className="p-3" style={{ "width": "50%" }} align="center">
          <h3>Please provide the correct order of the list</h3>
          <SortableContext
            items={languages}
            strategy={verticalListSortingStrategy}
          >
            {/* We need components that use the useSortable hook */}
            {languages.map(language => <SortableItem key={language} id={language} />)}
          </SortableContext>

          {/* {(token === 0) ? (
            <h1>false</h1>
          ) : (
            <h1>Correct</h1>
          )} */}

        </Container>

      </DndContext>


      <button onClick={() =>postq(finalresult)} className="button" >Done</button>


    </>
  );

  function handleDragEnd(event) {
    console.log("Drag end called");
    const { active, over } = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);

    if (active.id !== over.id) {
      setLanguages((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
        // items: [2, 3, 1]   0  -> 2
        // [1, 2, 3] oldIndex: 0 newIndex: 2  -> [2, 3, 1] 

      }

      );


    }
  }
}

export default App;