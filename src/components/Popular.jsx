import React, {useEffect, useState} from 'react';
import {requests} from "../api/requests";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from "react-router-dom";
import axios from "axios";


function Popular() {
    const [popular, setPopular] = useState([])


//**********************************************************************************//
    /*
пробуем оживить
*/
//     const getPopular = async () => {
//
//         const checkLocalStorage = localStorage.getItem("popular")
//
//         if (checkLocalStorage) {
//             setPopular(JSON.parse(checkLocalStorage))
//         } else {
//             const api = await fetch(`${requests.fetchPopular}`)
//             const data = await api.json()
//
//             localStorage.setItem("popular", JSON.stringify(data.recipes))
//             setPopular(data.recipes)
//             console.log(data.recipes)
//         }
//     }
//**********************************************************************************//

    const getPopular = async () => {
        try {
            const checkLocalStorage = localStorage.getItem("popular")

            if (checkLocalStorage) {
                setPopular(JSON.parse(checkLocalStorage))
            } else {

                // const resp = await axios.get(`${requests.fetchPopular}`);
                const resp = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=european`);
                console.log(resp.data);
                localStorage.setItem("popular", JSON.stringify(resp.data.recipes))
                setPopular(resp.data.recipes)
            }

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
            getPopular()
        }, []
    )
    ;

    /*
    пробуем оживить
     */
//     useEffect(() => {
//         async function fetchData() {
//             const request = await axios.get(`${BASE_URL}=${process.env.REACT_APP_API_KEY}&number=9`)
//             setPopular(request.data)
//             return request
//         }
//         fetchData().then(r => console.log(r))
//     }, [])


    return (

        <Wrapper>
            <h3>Популярный выбор</h3>
            <Splide options={{
                perPage: 4,
                arrows: true,
                pagination: true,
                drag: "free",
                gap: "2rem",
                rewind: true,
            }}>
                {popular?.map(e => (
                        <SplideSlide key={e.id}>
                            <Card>
                                <Link to={'recipe/' + e.id}>
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
    )

}

export default Popular;


const Wrapper = styled.div`
  margin: 2rem 0;
`
const Card = styled.div`
  min-height: 14rem;
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
