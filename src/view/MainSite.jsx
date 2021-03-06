import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';

import {toolsList} from "../toolsList";
import {AppContext} from "../context/AppContext";

import Category from "../components/Category";
import SortBar from "../components/SortBar";
import BackToTop from "../components/BackToTop";
import Message from "../components/Message";

const Wrapper = styled.div`
  width: 80vw;
  background-color: #FFFFFF;
  margin: 10vh auto 0 auto;
  
  @media(max-width: 1200px){
    width: 95vw;
  }
  
  @media(max-width: 850px){
    width: 100vw;
    margin-top: 5vh;
  }
`

const MainSite = () => {

    const { messageVisibility, globalLanguage } = useContext(AppContext);

    const [myData, setMyData] = useState({tools: []});
    const [errorMessage, setErrorMessage] = useState("");

    // const URL = 'http://www.helpfool.pl/dataTest/data.json';
    const URL = 'http://localhost:5000/getTools';

    const getData = async () => {
        fetch(URL)
            .then(response => {
                if(!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then(data => {
                console.log("Loaded data:", data);
                setMyData(data);
            })
            .catch(error => {
                console.log("error ", error);
                setErrorMessage(error);
            })
    }

    const renderCategories = myData.tools.map( item => (
       <Category item={item} />
    ));

    const items = toolsList.map( item => (
       <Category item={item} />
    ));

    useEffect(() => {
        getData()
    }, [])

    return(
        <Wrapper>
            { messageVisibility && <Message message={globalLanguage.mainMsg}/>}
            {/*<SortBar/>*/}
            {items}
            {/*{renderCategories}*/}
            <BackToTop/>
        </Wrapper>
    );
}

export default MainSite;