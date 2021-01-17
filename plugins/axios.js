export default function({$axios}, inject) {
  const api = $axios.create({
    withCredentials: true
  })

  api.setBaseURL(process.env.API_URL || 'http://localhost:3000')
  inject('api', api)
}