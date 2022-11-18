import React, { useContext } from 'react'
import "./Tabs.css";
import styled from 'styled-components';
import { FilterContext } from './../../../contexts/FilterContext'
import InstaFilter from '../InstaFilter';
import CustomFilter from '../CustomFilter/CustomFilter';


const TabsBox= styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const TabBox = styled.div`
display: block;
text-align: end;
width: 100%;
`
const Tab = styled.button`
  padding: 15px;
  text-align: center;
  cursor: pointer;
  position: relative;
  font-size: 1.15rem;
  color: #3977F6;
  border: none;
  outline: none;
  background-color: inherit;

`

const TabContent = styled.div`
display: block;
width: 100%;
`
const Tabs = () => {
  const {tabState,toggleTab} = useContext(FilterContext)
 
 
  return (

      <TabsBox>
        <TabBox>
          <Tab  className={tabState === 1 ? "active-tab" : ""} onClick={() => toggleTab(1) }>Choisir un Filtre</Tab>
          <Tab  className={tabState === 2 ? "active-tab" : ""} onClick={() => toggleTab(2)}>Personnaliser</Tab>
        </TabBox>
        < TabContent>{tabState === 1 ? <InstaFilter/> : <CustomFilter />}</TabContent>
      </TabsBox>

 
  )
}


export default Tabs