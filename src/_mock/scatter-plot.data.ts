const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return {
    background: `rgba(${r}, ${g}, ${b}, 0.7)`,
    border: `rgba(${r}, ${g}, ${b}, 1)`,
  };
};

export const generateData = () => {
  return Array(100)
    .fill(undefined)
    .map((_, index) => {
      const colors = getRandomColor();
      return {
        data: [
          {
            x: parseFloat((Math.random() * 100).toFixed(2)),
            y: parseFloat((Math.random() * 100).toFixed(2)),
            person: {
              code: index,
              name: `Maria Acuña_${index}`,
              avatar: "./img/foto.png",
              politicalLogos: [
                "./img/img1.png",
                "./img/img2.png",
                "./img/img3.png",
              ],
            },
            disabled: false,
          },
        ],
        backgroundColor: colors.background,
        borderColor: colors.border,
      };
    });
};
