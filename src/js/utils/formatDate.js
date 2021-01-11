const formatDate = (date) => {
  // console.log(date.slice(0, 2).split("-"));
  const [year, month, day] = date.slice(0, 10).split("-");
  return `${year}, ${month}, ${day}`;
};

export default formatDate;