export const getPokemomId = (url) => {
  var parts = url.split('/');
  var id = parts.pop() || parts.pop();
  return id;
};
