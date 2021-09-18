
export const isLoggedKitchen = () => !!localStorage.getItem('STORAGE_KEY') && localStorage.getItem('currentEmployeeRole') === 'kitchen'

export const isLoggedRoom = () => !!localStorage.getItem('STORAGE_KEY') && localStorage.getItem('currentEmployeeRole') === 'room'


export const isLogged = () => !!localStorage.getItem('STORAGE_KEY') 


export const login = (token) => localStorage.setItem('STORAGE_KEY', token)

export const logout = () => {
  localStorage.removeItem('STORAGE_KEY')
  localStorage.removeItem('currentEmployeeName')
  localStorage.removeItem('currentEmployeeEmail')
  localStorage.removeItem('currentEmployeeToken')
  localStorage.removeItem('currentEmployeeRole')
}
