import { useEffect, useState } from "react"

const Componente = () => {
    const [valor, setValor] = useState(false)

    // useEffect(codigoEjecutar, listaDeDependencias) 

    // cuando no le pasas segundo argumento, useEffect se ejecuta cada vez que se renderiza el compomente
    //segundo parametro tendria que ser un array = son las dependencias

    // las depencias, son el 2do paramentro:
        // - son valores que cada vez que cambian avn a ejecutar el codigo del 1er parametro 


    useEffect( () => {
        console.log('El codigo a ejecutar')


    }, listofDefendencies)
}
