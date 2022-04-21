import React, {useEffect, useState} from 'react';
import {BASE_URL_DETAILS} from "../api/requests";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";


function Recipe() {
    const [detailList, setDetailList] = useState({})
    const [activBtn, setActivBtn] = useState('ingredients')
    const [loading, setLoading] = useState(false);

    const params = useParams()

    useEffect(() => {
        fetchDetails()
    }, [params.name]);

    /*
    пробуем оживить
    */
// const clickBtnDone = () => {
//     setActivBtn('instructions')
// }
// const clickBtnIsDone = () => {
//     setActivBtn('ingredients')
// }

    // apiKey=15c20b856b6741bc85914517bd05a182
    const fetchDetails = async () => {
        setLoading(true)
        try {
            // const res = await axios.get(`${BASE_URL_DETAILS}${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
            const res = await axios.get(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=15c20b856b6741bc85914517bd05a182`)
            setDetailList(res.data)
            console.log(res.data)
        } catch (error) {
            console.log('Ошибка обработки details, одного из элементов' + error)
        }
        setLoading(false)
    }


    return (
        <DetailWrapper>
            <div>
                <h3>{detailList.title}</h3>
                {loading ? (
                        <p>Loading...</p>)
                    :
                    <img src={detailList.image} alt='details'/>
                }
            </div>
            <Info>
                <Buttonleft className={activBtn === 'instructions' ? 'active' : ''}
                            onClick={() => setActivBtn('instructions')}>Инструкция</Buttonleft>

                <Buttonleft className={activBtn === 'ingredients' ? 'active' : ''}
                            onClick={() => setActivBtn('ingredients')}>Ингредиенты</Buttonleft>

                {activBtn === 'instructions' && (
                    <div style={{marginTop: "20px"}}>
                        <span dangerouslySetInnerHTML={{__html: detailList.summary}}></span>
                        <span dangerouslySetInnerHTML={{__html: detailList.instructions}}></span>
                    </div>
                )}
                {activBtn === 'ingredients' && (
                    <ul>
                        {
                            detailList.extendedIngredients?.map(e => (
                                <li key={e.id}>{e.original}</li>
                            ))}
                    </ul>
                )}
            </Info>
        </DetailWrapper>
    )
}

export default Recipe;

const DetailWrapper = styled.div`
  margin-top: 8rem;
  margin-bottom: 3rem;
  display: flex;
  //width: 1200px;


  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    line-height: 30px;
    color: white
  }

  li {
    font-size: 1.2rem;
    line-height: 2.0rem;
    color: white
  }

  ul {
    margin-top: 2rem;

  }

  img {
    border-radius: 10px;
    object-fit: cover;
    width: 400px;
  }


`

const Buttonleft = styled.button`
  padding: 1rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  margin-top: 3rem;
  font-weight: 600;
  cursor: pointer;
`
// const ButtonRight = styled(Buttonleft)`
// `
const Info = styled.div`
  margin-left: 6rem;
`











