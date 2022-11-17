import {useState} from "react";
import styles from "./App.module.css"
import poweredimage from "./assets/powered.png"
import {GridItem} from "./components/GridItem/GridItem"

import { levels, calculateImc} from "./helpers/imc";

const App = () => {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculateButton = () => {

    if(heightField && weightField) { // primeiro vai  verificar se o peso e altura foram preenchidos


    } else {

      alert('Digite os valores nos campos') //se não tiver, vai aparecer o alerta
    }

  }


  return(

    <div className={styles.main}>
      

      <header>

        <div className={styles.headerContainer}>

          <img src={poweredimage} alt="" width={150}/>

        </div>  
        
      </header>

        <div className={styles.container}>


          <div className={styles.leftSide}>
          <h1>Calcule seu IMC.</h1>
          <p>IMC é a sigla para o índice de massa córporea, parâmetro adotado pela Organnização Mundial de Saúde para cálcular o peso ideal de cada pessoa</p>

          <input

          type='number'
          placeholder="Digite sua Altura. Ex: 1.5 (em metros)"
          value = {heightField > 0? heightField:""} // Se o heightField for maior que 0, no campo vai aparecer o valor dele, caso contrário, o campo vai fciar vazio ( essa condicional vai impedir que o campo fique taxado com o valor 0)
          onChange = {e => setHeightField(parseFloat(e.target.value))}

          />

          <input

          type='number'
          placeholder="Digite seu peso. Ex: 75.3 (em kg)"
          value = {weightField > 0? weightField:""} // Se o heightField for maior que 0, no campo vai aparecer o valor dele, caso contrário, o campo vai fciar vazio ( essa condicional vai impedir que o campo fique taxado com o valor 0)
          onChange = {e => setWeightField(parseFloat(e.target.value))}

          />

          <button onClick={handleCalculateButton}>Calcular</button>
          
          </div>

          <div className={styles.rightSide}>

            <div className={styles.grid}>

            {levels.map((item, key) => (

              <GridItem key={key} item={item}/>

            ))}

            </div>

          </div>

        </div>

    </div>

  );

};

export default App;
