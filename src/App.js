import './App.css';
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import {GiKnifeFork} from "react-icons/gi";
import React from "react";
import myVideo from "./process.mp4";

function App() {
    return (
        <>
            <Intro>
                <Main>
                    <video className='video'
                           controls autoPlay loop muted>
                        <source className='video_intro'
                                src={myVideo} type="video/mp4"/>
                    </video>
                    <Intro_content>

                        <Nav>
                            <GiKnifeFork/>
                            <Logo to={'ereminrecipesapp/'}>Меню</Logo>
                        </Nav>
                        <div className='wrapper'>
                            <Search/>
                            <Category/>
                            <Pages/>
                        </div>

                    </Intro_content>
                </Main>
            </Intro>
        </>
    );
}

export default App;


const Logo = styled(Link)`

  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  cursor: pointer;
`
const Nav = styled.div`
  margin-left: 10%;
  padding: 2rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;


  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;


  svg {
    font-size: 2rem;
  }

`

const Intro = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;

  ::after {
    content: '';
    display: block;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

`

const Main = styled.div`
  align-items: center;
  justify-content: center;
  position: relative;
`


const Intro_content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
`

const Intro_content_wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`





