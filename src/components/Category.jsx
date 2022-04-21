import React from 'react';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from "styled-components";
import {NavLink} from 'react-router-dom';


function Category() {
    return (
        <List>

            <SList to={'/cuisine/italian'}>
                <FaPizzaSlice/>
                <h4>Итальянская</h4>
            </SList>
            <SList to={'/cuisine/american'}>
                <FaHamburger/>
                <h4>Американская</h4>
            </SList>
            <SList to={'/cuisine/thai'}>
                <GiNoodles/>
                <h4>Тайская</h4>
            </SList>
            <SList to={'/cuisine/japanese'}>
                <GiChopsticks />
                <h4>Японская</h4>
            </SList>

        </List>
    );
}

export default Category;

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;

`
const SList = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transform: scale(0.8);


  h4 {
    font-size: 0.6rem;
    color: white;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }

  }

`


