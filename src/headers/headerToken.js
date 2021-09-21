const header = () => {
    let config = {
        headers:{
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
            'Authorization':  `Bearer ${process.env.REACT_APP_TOKEN}`
        } 
    }
    return config

}

export default header
 