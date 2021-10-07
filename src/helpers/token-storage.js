export const setToken = (token) => {
  localStorage.setItem('token-sk', token)
}

export const getToken = () => {
  return localStorage.getItem('token-sk')
}

export const removeToken = () => {
  localStorage.removeItem('token-sk')
}