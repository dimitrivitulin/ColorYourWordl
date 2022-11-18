import React, { useContext} from 'react'
import styled from 'styled-components';
import { FilterContext } from '../../contexts/FilterContext';
import { filterValues } from '../../utils';

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
`
const Filter = styled.button`
  outline:none;
  border:none;
  padding:5px;
  background-color: inherit;
  color: #3977F6;
  cursor: pointer;
  &:hover{
    color:#EA9B42;
  }
  &:focus{
    color:#EA9B42;
  }
`

const InstaFilter = () => {
  const {filterClass, setFilterClass} = useContext(FilterContext);
  const handleClick = (e) =>{
    setFilterClass(e.target.value);
    console.log('filterClass', filterClass);
    
  }
  
  return (
      <Filters>
        {filterValues.map((filter, index)=>
            <Filter key={index} value={filter.class} onClick={handleClick}>{filter.name}</Filter>
        )}
      </Filters>
  )
}

export default InstaFilter