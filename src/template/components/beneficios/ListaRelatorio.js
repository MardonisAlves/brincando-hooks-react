import React ,{useEffect , useState}from 'react';
import header  from '../../../headers/headerToken';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ListaRelatorio (props){
    // const [id , setId] = useState(props.match.params);
    //  console.log(id.id)
    // const Id = parseInt(id , 10)
    // const { register, formState: { errors }, handleSubmit } = useForm();
    const [relatorio, setRelatorio] = useState([])
    const [idmodal , setIdmodal] = useState();
    const [name , setName] = useState();
    const [idade , setIdade] = useState();

    console.log(name , idade)
    const [open, setOpen] =useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSubmit = data => props.updateAction(data);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/prefeitura`, header()
        ).then(function (response) {
            setRelatorio(response.data.prefeitura)
           console.log(response)
        }).catch((Error) => {
            console.log(Error)
        });

    }, []);

   const handleChaneId = (id) => {
    console.log(id)
    setIdmodal(id)
    handleOpen()
   }
 
   function receberinformacaofilho(nome , idade){
    setName(nome)
    setIdade(idade)
   }

   // login()


    return(
        <div>
            {
            relatorio.map(
            item =>
                <div key={item.id}>
                     <Button
                      onClick={() => handleChaneId(item.id)}>Modal
                     </Button>
                     
          </div>

            )
          }
        {/* <ComponentFilho quandomudar={receberinformacaofilho}/>  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal  {idmodal}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

     
    

    </div>
        


        
    )
}
export default ListaRelatorio