
import styled from 'styled-components';
import SliderField from './SliderField/SliderField';

const CustomFilterBox = styled.div`
  display: flex;
  flex-direction: column;
  padding:3vh 10vw;
`

const CustomFilter = () => {
  
  
  const slider = [
    { label: 'Contrast', defaultValue: 100, field: 'contrast' },
    { label: 'Brightness', defaultValue: 100, field: 'brightness' },
    { label: 'Saturation', defaultValue: 100, field: 'saturate' },
    { label: 'Sepia', defaultValue: 0, field: 'sepia' },
    { label: 'Gray Scale', defaultValue: 0, field: 'gray' },
  ]

 

  return (
    <CustomFilterBox>
    {slider.map(slide =>
      <SliderField slide={slide} key={slide.field}/> )}
    </CustomFilterBox>
  )
}

export default CustomFilter