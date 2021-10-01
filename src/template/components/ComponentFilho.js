import React ,{useState} from 'react';

function ComponentFilho(props) {
    const [name ,setName] = useState()
    const [idade ,setIdade] = useState()

    const input = props.quandoClicar(name ,idade)
    console.log('filho' , name)

    return(
    <div>
        <input 
        type="text" 
        onChange={(e) => setName(e.target.value)}></input>

        <input 
        type="number" 
        onChange={(e) => setIdade(e.target.value)}></input>


    </div>
    )
}

export default ComponentFilho