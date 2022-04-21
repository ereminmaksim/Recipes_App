import React, {useState} from 'react';
import styled from "styled-components";
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom'


function Search(props) {
    const [searchInput, setSearchInput] = useState(['']);
    const navigate= useNavigate()

const onChangeSearch = (e) => {
    setSearchInput(e.currentTarget.value)
}
const submitSearch = (e) => {
    e.preventDefault()
    // console.log(e + "Привет")
    navigate('ereminrecipesapp/searched/' + searchInput)
}


    return (
        <FormStyle onSubmit={submitSearch}>
            <div>
                <FaSearch/>
                <input type="text"
                       onChange={onChangeSearch}
                       value={searchInput}/>
            </div>
        </FormStyle>
    );
}

export default Search;

const FormStyle = styled.form`
  margin: 0 10rem;

  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    background: linear-gradient(35deg,#494949,#313131);
    font-size: 1.0rem;
    color: white;
    padding: 0.5rem 2.5rem;
    border-radius: 11px;
    outline: none;
    width: 100%;

  }

  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: white;
  }

`