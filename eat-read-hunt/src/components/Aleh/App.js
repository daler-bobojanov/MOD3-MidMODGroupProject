import React, { useState } from 'react';
import axios from 'axios';
// import SearchForm from './components/Aleh/SearchForm';
import SearchForm from './SearchForm';
// import Button from './components/Aleh/Button';
import Button from './Button';
// import Block from './components/Aleh/Block';
import Block from './Block';
import styled from 'styled-components';
// import Error from './components/Aleh/Error';
import Error from './Error';
import { Link, BrowserRouter } from 'react-router-dom';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';

//API key sent in Webex
const KEY = process.env.REACT_APP_API_KEY;
const ID = process.env.REACT_APP_API_ID;
//****************** */

function App() {
  //Storing data from API call using React hooks ******** */
  const [someData, setSomeData] = useState('');
  const [mainRecipe, setMainRecipe] = useState([]);
  const [empty, setEmpty] = useState('')

  const url = `https://api.edamam.com/search?q=${someData}&app_id=${ID}&app_key=${KEY}`;

  const onSubmitHandler = async (event) => {
    if (someData !== '') {
      event.preventDefault();
      const res = await axios.get(url);
      setMainRecipe(res.data.hits)
      setSomeData('');
    } else {
      setEmpty('Search bar is empty');
    }
  }
  /// *********************************
  const onChangeHandler = (event) => {
    setSomeData(event.target.value);
  }
  ////This section is for styles, imported from styled-components

  const Title = styled.h1`
font-size:4em;
display: flex;
flex-flow:column;
align-items:center;
justify-content:center;
color:rgb(237, 117, 47);
text-shadow:6px 6px 3px black;
`;

  const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(5,1fr);
  grid-template-rows:repeat(3,1fr);
  grid-gap:1% 1%;
  justify-content:space-evenly;
  align-items:flex-start;
  text-align:center;
`
  const StyledHeader = styled.div`
    display: flex;
    justify-content:space-around;
    align-items:center;
    font-size:2rem;
    text-decoration:none;
    text-align:center;
    font-size:1.5em;
    color:white;
    text-shadow:2px 2px 1px black;
    border:4px solid black;
    background-image:url('https://i.pinimg.com/736x/81/4d/e8/814de875dcd72f4398fb42965fd11a83.jpg'); 
    height:15vh;
    width:100vw;
    margin:0;
`
  const StyledTitle = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  background-color:rgba(0,0,0,0.4);
  border:2px solid black;
  margin:40px auto 100px auto;
  width:40%;
  height:10vh;
  box-shadow:10px 10px 2px black;
`

  ///*********************************** */

  return (
    <div className="App">
      {/* <h1>Project is Coming Here</h1> */}
      {/*  Receipe App imported  *****************************/}
      {/* 
      <StyledHeader>
        <BrowserRouter>
          <Link to="/"> Home</Link>
          <Link to="/top"> Top 5 recipes</Link>
          <Link to="/motivation"> Why to cook?</Link>
        </BrowserRouter>
      </StyledHeader>
       */}
      <div className='App-header'>
        <StyledTitle><Title>Grandma's Recipe</Title> </StyledTitle>
        <SearchForm
          inputChange={onChangeHandler}
          info={someData}></SearchForm>
        {empty ? <Error error={empty} /> : null}
        <Button ClickBtn={onSubmitHandler}></Button>
        <Grid >{mainRecipe.map((res, index) =>
          <Block
            key={index}
            info={res}
          />
        )}
        </Grid>
        <ScrollUpButton />
      </div >
      {/* *********************************************** */}
    </div>
  );
}

export default App;
