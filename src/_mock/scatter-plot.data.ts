const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return {
    background: `rgba(${r}, ${g}, ${b}, 0.7)`,
    border: `rgba(${r}, ${g}, ${b}, 1)`,
  };
};

const getDisabledColor = () => {
  return {
    background: "rgba(128, 128, 128, 0.2)",
    border: `rgba(128, 128, 128, 0.3)`,
  };
};

export const generateData = () => {
  return Array(100)
    .fill(undefined)
    .map(() => {
      const disabled = false;
      const colors = getRandomColor();
      const disabledColors = getDisabledColor();
      return {
        data: [
          {
            x: parseFloat((Math.random() * 100).toFixed(2)),
            y: parseFloat((Math.random() * 100).toFixed(2)),
            person: {
              name: "Maria Acuña",
              avatar: "./img/foto.png",
            },
            disabled,
          },
        ],
        backgroundColor: !disabled
          ? colors.background
          : disabledColors.background,
        borderColor: !disabled ? colors.border : disabledColors.border,
        borderWidth: 2,
        pointRadius: 10,
        pointBorderWidth: 3,
        pointStyle: "rectRounded",
      };
    });
};
