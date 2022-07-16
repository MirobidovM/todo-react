export const showAlert = (setAlert) => {
  setAlert({
    error: false,
    success: true,
  });

  setTimeout(() => {
    setAlert({
      error: false,
      success: false,
    });
  }, 2000);
};
