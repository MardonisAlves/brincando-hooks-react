
import Menu from './template/menu/menu';
import axios from 'axios';
function App() {
/* Criar um pdf precisa baixa um pacote para o nest js

---  https://www.npmjs.com/package/@nestjs/serve-static
---  mudar a versao do sequelize para "sequelize": "^6.6.2",

 const pdfBuffer: Buffer = await new Promise(resolve => {
    const doc = new PDFDocument({
      size: 'A4',
      bufferPages: true,
      
    })

    // customize your PDF document
    doc.image('client/download.jpeg', 0, 0, {width: 595.28, height:841.89})
    doc.fontSize(25)
    doc.fillColor('red').text('hello world', 100, 50)
    doc.fillColor('white').text('hello world', 300, 50)
    doc.end()

    const buffer = []
    doc.on('data', buffer.push.bind(buffer))
    doc.on('end', () => {
      const data = Buffer.concat(buffer)
      resolve(data)
    })
  })

  response.set({
    'Content-Type': 'application/pdf',
    'Content-Disposition': 'attachment; filename=example.pdf',
    'Content-Length': pdfBuffer.length,
  })

  
 return pdfBuffer;

*/
  const relatorio = () =>{
    axios.get('http://localhost:8080/guias/print/guia',{ responseType: 'blob'},{
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
