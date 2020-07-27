const axios = require('axios')

const fetchLinks = async () => {
  console.log("Fetch");
  const jwt = await localStorage.getItem('token')
  console.log(jwt);
  return await axios.get(`${process.env.REACT_APP_BACKEND}/user/url/all`, {headers: {Authorization: `Bearer ${jwt}`}})
  .then((response) => {
    return response.data;
    // return [{_id: 'asfdsfdsfds', url: 'dcfgvbhnmnbvcxzxcvbnm', shortUrl: 'fgsbavdgsacf', clicks: 0},{_id: 'asfdsfdsfds', url: 'dcfgvbhnmnbvcxzxcvbnm', shortUrl: 'fgsbavdgsacf', clicks: 0}];
  })
  .catch((error)=>{
    return {error: "Error"}
  })
}

export {fetchLinks}