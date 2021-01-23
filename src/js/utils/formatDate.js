const formatDate = (date) => {
  const formatedDate = new Date(date);
  return `${formatedDate.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
  })}, ${formatedDate.getFullYear()}`;
};

export default formatDate;