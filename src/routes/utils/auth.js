
export const isLoggedKitchen = () => !!localStorage.getItem('currentEmployeeToken') && localStorage.getItem('currentEmployeeRole') === 'kitchen'

export const isLoggedRoom = () => !!localStorage.getItem('currentEmployeeToken') && localStorage.getItem('currentEmployeeRole') === 'room'


export const isLogged = () => !!localStorage.getItem('currentEmployeeToken') 


export const login = (token) => localStorage.setItem('STORAGE_KEY', token)

export const logout = () => {
  localStorage.removeItem('STORAGE_KEY')
  localStorage.removeItem('currentEmployeeName')
  localStorage.removeItem('currentEmployeeEmail')
  localStorage.removeItem('currentEmployeeToken')
  localStorage.removeItem('currentEmployeeRole')
}
