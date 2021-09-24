export const orderAge = (timeInSeconds) => {
  if (timeInSeconds < 60) {
    return 'agora há pouco';
  } if (timeInSeconds < 3600) {
    const timeInMinutes = Math.round(timeInSeconds / 60);
    return `${timeInMinutes} min.`;
  } if (timeInSeconds < 86400) {
    const timeInHours = Math.round(timeInSeconds / 3600);
    return `${timeInHours} h.`;
  } if (timeInSeconds < 604800) {
    const timeInDays = Math.round(timeInSeconds / 86400);
    return `${timeInDays} d.`;
  } if (timeInSeconds < 2628288) {
    const timeInWeeks = Math.round(timeInSeconds / 604800);
    return `${timeInWeeks} sem.`;
  } if (timeInSeconds < 31536000) {
    const timeInMonths = Math.round(timeInSeconds / 2628288);
    return `${timeInMonths} m.`;
  } if (timeInSeconds === 31536000) {
    const timeInYears = Math.round(timeInSeconds / 31536000);
    return `${timeInYears} a.`;
  }
};

export const orderProcessAge = (timeInSeconds) => {
  if (timeInSeconds < 0.5) {
    return `ENF`;
  } if (timeInSeconds < 60) {
    const timeInRoundSeconds = Math.round(timeInSeconds);
    return `${timeInRoundSeconds} segundos.`;
  } if (timeInSeconds < 3600) {
    const timeInMinutes = Math.round(timeInSeconds / 60);
    return `${timeInMinutes} minutos.`;
  } if (timeInSeconds < 86400) {
    const timeInHours = Math.round(timeInSeconds / 3600);
    return `${timeInHours} horas.`;
  } if (timeInSeconds < 604800) {
    const timeInDays = Math.round(timeInSeconds / 86400);
    return `${timeInDays} dias.`;
  } if (timeInSeconds < 2628288) {
    const timeInWeeks = Math.round(timeInSeconds / 604800);
    return `${timeInWeeks} semanas.`;
  } if (timeInSeconds < 31536000) {
    const timeInMonths = Math.round(timeInSeconds / 2628288);
    return `${timeInMonths} meses.`;
  } if (timeInSeconds === 31536000) {
    const timeInYears = Math.round(timeInSeconds / 31536000);
    return `${timeInYears} anos.`;
  }
};