
import axios from 'axios';
import React, { useState } from 'react'; 

const Formulaire =()=>{
    const lengthMax=130;
    const [titre,setTitre]=useState("");
    const [suggestion,setSuggestion]=useState("");

    const [restant,setRestant]=useState(lengthMax)

        function handleInputTItre(e){
            setTitre(e.target.value);
         }

    function handleInputSuggestion(e){
        setSuggestion(e.target.value);
        setRestant(lengthMax-suggestion.length);
    }

    return(
        
       
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-6'>

                <form>

                    <div className="form-floating mb-3">
                         <input type="text" className="form-control" id="floatingInput" onChange={handleInputTItre} />
                         <label>Titre</label>
                    </div>

                    <div className="mb-3">
                        <label  className="form-label">Entrer votre idee</label>
                        <textarea className="form-control" id="suggestion" name="suggestion" rows="3"  onChange={handleInputSuggestion}></textarea>
                         <p style={{color:(suggestion.length>=100)?"red":"green"}}> Contenu saisi {suggestion.length} / 130</p>
                         <p id="text-restant"  >Il vous reste {restant} </p>
                     </div>
                            <button style={{visibility:(suggestion.length>=130)?"hidden":"visible"}} type="submit" id="" className="btn btn-danger float-start " >Envoyer</button>

                </form>
                </div>

                <div className='col-6'>
                    <img src="/img2.svg" className='img-fluid' alt=""/>
                </div>
                </div>
            </div>
           
       
    );
}
export default Formulaire


