const sortObject = o => Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});

const createObject = (key, value) => {
  const obj = { key, value };
  return obj;
};

const filterObject = (item, filter) => {
  const result = [];
  const newObject = sortObject(item);

  for (const i in filter) { // eslint-disable-line
    result.push(createObject(filter[i], item[filter[i]]));
  }
  for (const index in newObject) { // eslint-disable-line
    const object = createObject(index, item[index]);
    if (!result.some(e => e.key === object.key)) { result.push(object); }
  }
  return result;
};

export default filterObject;
