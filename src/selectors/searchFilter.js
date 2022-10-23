export const searchCustomer = (customers,searchInput) => {
    const filterCustomers = customers.filter((customer) => {
        return (
          customer.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          customer.mobile.includes(searchInput)
        );
      });
      return filterCustomers
}


export const searchProducts = (products,search) => {
    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  return filteredProducts
}