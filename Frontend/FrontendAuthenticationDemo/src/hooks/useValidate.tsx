import { useState } from 'react';

const useValidate = (validateValue: (value: any) => boolean) =>{
    const [enteredValue, setEnteredValue] = useState("")
    const [isTouched, setIsTouch] = useState(false)

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value)
      }
    
      const valueBlurHandler = () => {
        setIsTouch(true);
      }
    
      const reset = () =>{
        setIsTouch(false);
      }

    return{
        value: enteredValue,  
        isValid: valueIsValid, 
        hasError, 
        valueChangeHandler, 
        valueBlurHandler,
        reset
    };
}

export default useValidate;