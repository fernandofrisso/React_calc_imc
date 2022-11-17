
export type level = {

    title:string;
    color:string;
    icon:'down' | 'up'; // poderia botar "string", mas como só são duas opções, posso colocar dessa forma
    imc: number[];
    yourImc?:number
}


export const levels:level[] = [

        {title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0,18.5]},
        {title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.5, 24.9]},
        {title: 'Sobrepeso', color: '#E28039', icon: 'down', imc: [25,30]},
        {title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1,99]}

]


export const calculateImc = (heigth:number, weight:number) =>{

        const imc = weight / (heigth * heigth);

        for(let i in levels){

            if(imc >= levels[i].imc[0] && imc < levels[i].imc[1] ){ // o "0" e o "1" significam : ex: imc [0 (esse significa o 0), 18.5 (significa o 1)]
                levels [i].yourImc = imc
                return levels [i]; // retorna o próprio level 

            }

            return null // caso n se enquadre no de cima vai retornar nulo
        }
}