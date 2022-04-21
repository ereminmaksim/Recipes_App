import React, {useEffect, useState} from 'react';
import axios from "axios";
import {requests} from "../api/requests";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from "react-router-dom";

function Veggie(props) {
    const [veggie, setVeggie] = useState([])


    /*
    пробуем оживить
    */
// const getPopular = async () => {
//     // работаем с localStorage
//
//     const api = await fetch(`${requests.fetchPopular}`)
//     const data = await api.json()
//     // console.log(data)
//     setPopular(data.recipes)
//     console.log(data.recipes)
// }
    const getVeggie = async () => {
        try {
            const checkLocalStorage = localStorage.getItem("veggie")

            if (checkLocalStorage) {
                setVeggie(JSON.parse(checkLocalStorage))
            } else {
                // const api = await axios.get(`${requests.fetchVegetarian}`)
                const api = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=15c20b856b6741bc85914517bd05a182&number=9&tags=vegetarian`)
                localStorage.setItem("veggie", JSON.stringify(api.data.recipes))
                setVeggie(api.data.recipes)
                console.log(api.data.recipes)
            }
        } catch (error) {
            console.log("Возникла ошибка парсинга: " + error)
        }
    }

    useEffect(() => {
        getVeggie()
    }, []);


    return (
        <Wrapper>
            <h3>Для вегана!!!</h3>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: "free",
                gap: "5rem"
            }}>
                {veggie?.map(e => (
                        <SplideSlide key={e.id}>
                            <Card>
                                <Link to={'/recipe/' + e.id}>
                                    <p>{e.title}</p>
                                    <img src={e.image} alt={e.title}/>
                                    <Gradient/>
                                </Link>
                            </Card>
                        </SplideSlide>
                    )
                )}
            </Splide>
        </Wrapper>
    );

}

export default Veggie;

const Wrapper = styled.div`
  margin: 2rem 0;
  //max-width: 1200px;
`
const Card = styled.div`
  min-height: 16rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 10px;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`