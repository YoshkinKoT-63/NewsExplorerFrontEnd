const cutText = (str) => {
  if (str.length <= 30) return str;
  return `${str.substr(0, str.lastIndexOf(' ', 30))}...`;
}

export default cutText;