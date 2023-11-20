import  {useState,createContext, useContext} from "react"; 
 



const CheckboxContext = createContext ();





const CheckboxProvider=({children}) =>{

const [checked,setChecked]=useState(false)



  return (
            <CheckboxContext.Provider value={{checked,setChecked}}>
                {children}
            </CheckboxContext.Provider>

              );
};

// custom hooks

const useCheckbox=()=>{
  return useContext(CheckboxContext);
}

export{ CheckboxProvider, CheckboxContext,useCheckbox}; 