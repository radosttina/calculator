export const onThemeChange = () => {
  const theme = [...document.querySelectorAll('input[name="theme"]')].filter(
    (e) => e.checked
  )[0].dataset.theme;

  document.body.dataset.theme = theme;
};
