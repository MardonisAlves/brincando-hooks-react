const header = (email , senha) => {
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'grant_type': 'password',
            'client_id': '2',
            'client_secret': 'wrSG18NYjPkh86AgCqBsbut8hSYGF4w3AfMACcFO',
            'username': `${email}`,
            'password': `${senha}`,
            'scope': '*'
        }
    }

    return config

}

export default header
 