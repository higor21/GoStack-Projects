import axios from 'axios';

class Api {
    static getUserInfo = async (username) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response);
        }catch(err){
            console.log(err)
        }
    }
}

Api.getUserInfo('higor21')