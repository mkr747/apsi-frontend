export default function({$axios}, inject) {
  const api = $axios.create({
    withCredentials: false,
    headers: { 'Access-Control-Allow-Origin': '*' }
  })

  api.setBaseURL(process.env.API_URL || 'http://localhost:3000')
  inject('api', api)
}
