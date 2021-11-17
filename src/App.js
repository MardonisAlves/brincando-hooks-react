
import Menu from './template/menu/menu';
import axios from 'axios';
function App() {

  const relatorio = () =>{
    axios.get(`${process.env.REACT_APP_HOME}/api/ficha/`+ 8,{ responseType: 'blob'},{
        headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization" :  `Bearer ${localStorage.getItem('access_token')}`
        
        }
    }

    ).then(function (response) {
    console.log(response)
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'download.pdf');
    document.body.appendChild(link);
    link.click();
        
    }).catch(function (error) {
       
    })

}
  return (
    <div className="App">
    <Menu />
    <div>

    <h1>Relatorio</h1>
    <button onClick={() => relatorio()}>Imprimir</button>
    </div>
    </div>
  );
}

export default App;
