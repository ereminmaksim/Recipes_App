import React, {useEffect, useState} from 'react';
import {requests} from "../api/requests";
import {Link, useParams} from "react-router-dom";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import axios from "axios";


function Searched() {
    const [searched, setSearched] = useState([])
    let params = useParams()

    // 15c20b856b6741bc85914517bd05a182
    const getSearched = async (name) => {
        try {
            // const res = await axios.get(`${requests.fetchSearch}&query=${name}`)
            const res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=15c20b856b6741bc85914517bd05a182&query=${name}`)
            setSearched(res.data.results)
            console.log(res.data.results)
        } catch (error) {
            console.log("Ошибка Router: " + error)
        }

    }

    useEffect(() => {
        getSearched(params.search)
    }, [params.search]);


    return (
        <Grid>
            <Wrapper>
                <Splide options={{
                    perPage: 4,
                    arrows: true,
                    pagination: true,
                    drag: "free",
                    gap: "7rem",
                    rewind: true,
                }}>
                    {searched.map(e => {
                        return (
                                <SplideSlide key={e.id}>
                                    <Card>
                                        <Link to={'/ereminrecipesapp/recipe/' + e.id}>
                                            <p>{e.title}</p>
                                            <img src={e.image} alt={e.title}/>
                                        </Link>
                                    </Card>
                                </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
        </Grid>
    )
}

export default Searched;


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem
`

const Card = styled.div`
  position: relative;

  img {
    min-height: 15rem;
    border-radius: 10px;
    left: 0;
    width: 350px;
    height: 100%;
    object-fit: cover;
    padding-right: 55px;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Wrapper = styled.div`
  margin: 2rem 0;
`
