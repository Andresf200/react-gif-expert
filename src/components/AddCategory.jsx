import { useState } from "react";
import {PropTypes} from 'prop-types';

const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')  

    const handleSubmit = (e) => {
      e.preventDefault();
     
      if(inputValue.trim() <= 1) return;
      //Podemos utilizar el callback para llamar nuestro valor anterior y remplanzar
      onNewCategory(inputValue.trim());
      setInputValue('');
    };

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
      return (
    <form onSubmit={handleSubmit} aria-label="form">
        <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={handleInputChange}
         / >
    </form>
  )
}


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}

export {AddCategory}
