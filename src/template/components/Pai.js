import React ,{useState} from 'react';
import ComponentFilho from '../components/ComponentFilho';

function Pai(props) {
    const [nome ,setNome] = useState()
    const [idade ,setIdade] = useState()
    
    function fornecerInfomacoes(nome, idade) {
        setNome(nome)
        setIdade(idade)
        console.log('pai' , nome)
    }

    const cadastrar = () => {
        console.log(nome , 'cadastrando')
    }

    return(
    <div>
        <h1>pai</h1>
        <ComponentFilho quandoClicar={fornecerInfomacoes}></ComponentFilho>
        
        <button onClick={cadastrar}>
                Fornecer Informações
        </button>
    </div>
    )
}

export default Pai