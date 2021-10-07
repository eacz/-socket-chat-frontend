import { getToken } from "./token-storage"

const baseURL = process.env.REACT_APP_BACKEND_URL_API

export const fetchWithoutToken = async (endpoint, data, method = 'GET') => {
  const url = `${baseURL}/${endpoint}`

  if(method === 'GET'){
    const res = await fetch(url)
    return await res.json()
  } else {
    const res = await fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return await res.json()
  }
}

export const fetchWithToken = async (endpoint, data, method = 'GET') => {
  const url = `${baseURL}/${endpoint}`

  if(method === 'GET'){
    const res = await fetch(url, {
      headers: {
        'token-sk': getToken()
      }
    })
    return await res.json()
  } else {
    const res = await fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
        'token-sk': localStorage.getItem('token-sk')
      },
      body: JSON.stringify(data)
    })
    return await res.json()
  }
}