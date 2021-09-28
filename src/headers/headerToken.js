const header = () => {
    let config = {
        headers: {
            
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization" :  `Bearer ${localStorage.getItem('access_token')}`
        
        }
    }

    return config

}

export default header
 