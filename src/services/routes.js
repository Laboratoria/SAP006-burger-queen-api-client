export const navigateTo = (history, path, setModalState) => {
  setModalState(false);
  history.push(path);
}