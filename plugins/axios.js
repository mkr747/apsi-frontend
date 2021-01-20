export default function({$axios}, inject) {
  const api = $axios.create({
    withCredentials: false,
    headers: { 'Access-Control-Allow-Origin': '*' }
  })

  api.setBaseURL(process.env.API_URL || 'https://40.114.107.163/')
  inject('api', api)
}
