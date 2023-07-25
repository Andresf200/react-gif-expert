import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={handleInputChange}
         / >
    </form>
  )
}

export {AddCategory}
