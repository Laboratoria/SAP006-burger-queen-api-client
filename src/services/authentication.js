export const isAuthenticated = () => {
    const validation = localStorage.getItem(`token`)
    if (validation !== undefined && validation !== null) {
      return true
    }
    return false
  }
  
  



