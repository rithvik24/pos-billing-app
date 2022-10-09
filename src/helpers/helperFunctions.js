export const findCustomer = (id,customers) => {
  const result = customers.find((cust) => {
    return cust._id === id;
  });
  if (result) {
    return result.name;
  }
};
