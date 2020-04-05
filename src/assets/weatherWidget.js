// const axios = require('axios')

const weatherWidget = (usr) => {
  // This wouldn't work because this website isn't real, but it is a valid API request using the Axios package!

  // axios({
  //   method:'post',
  //   url:'http://www.infoScraper.com',
  //   data: {
  //     username: usr.username,
  //     password: usr.password
  //   }
  // }).catch((err) => {
  //   console.log(err)
  //   console.info('Nothing really happened because that is a fake website (I hope)')
    const result =
    `
    {
      message: 'success',
      statusCode: 200,
      detail: Credentials ${usr.username} ${usr.password} successfully posted to www.infoScraper.com
    }
    `

    return result
  // })
}

export default weatherWidget
