import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import styled from "styled-components";
import {Link, useParams} from 'react-router-dom'
import {requests} from "../api/requests";
import {Splide, SplideSlide} from "@splidejs/react-splide";

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    const params = useParams()

    useEffect(() => {
        getCuisine(params.type)
        // console.log(params.type)
    }, [params.type]);


    const getCuisine = async (name) => {
        try {
            // const data = await fetch(`${requests.fetchSearch}&cuisine=${name}`)
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
            const recipes = await data.json()

            setCuisine(recipes.results)
            console.log(recipes.results)
        } catch (error) {
            console.log("Ошибка Router: " + error)
        }

    }

    return (

        <Grid
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}>
            <Wrapper>
                <Splide options={{
                    perPage: 4,
                    arrows: true,
                    pagination: true,
                    drag: "free",
                    gap: "7rem",
                    rewind: true,
                }}
                >
                    {
                        cuisine.map(e => (
                                <SplideSlide key={e.id}>
                                    <Card>
                                        <Link to={'ereminrecipesapp/recipe/' + e.id}>
                                            <p>{e.title}</p>
                                            <img src={e.image} alt={e.title}/>
                                        </Link>
                                        <h4>{e.name}</h4>
                                    </Card>
                                </SplideSlide>
                        ))
                    }
                </Splide>
            </Wrapper>
        </Grid>
    )
}

export default Cuisine;


const Grid = styled(motion.div)`
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
  //max-width: 1200px;
`