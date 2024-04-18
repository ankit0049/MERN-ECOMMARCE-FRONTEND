
export function fetchAllProducts(amount = 1) { 

  //TODO : we not hardcode the endpoint of the server
  return new Promise(async(resolve) =>{
  const response = await fetch('http://localhost:8080/products') 
  const data = await response.json();   
  resolve({data}) 
  }
  );
} 

export function fetchProductsByFilters(filter, sort, pagination) { 


  let queryString = '';
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      queryString += `${key}=${categoryValues}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  const fetchString = `http://localhost:8080/products?${queryString}`;
  console.log('fetchString:', fetchString);

  // Fetch products with the constructed URL
  return new Promise(async (resolve) => {
    try {
      const response = await fetch(fetchString);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      } 
      const data = await response.json(); 
      const totalCount = response.headers.get('X-Total-Count') || data.length;
      console.log('Total Count:', totalCount);
      resolve({ data: { products: data, totalItems: +totalCount } });
    } catch (error) {
      console.error('Error fetching products:', error);
      resolve({ data: { products: [], totalItems: 0 } }); // Resolve with empty products and zero totalItems on error
    }
  });
}
 
export function fetchCategories(amount = 1) { 

  //TODO : we not hardcode the endpoint of the server
  return new Promise(async(resolve) =>{
  const response = await fetch('http://localhost:8080/category') 
  const data = await response.json();   
  resolve({data}) 
  }
  );
}  

export function fetchBrands(amount = 1) { 

  //TODO : we not hardcode the endpoint of the server
  return new Promise(async(resolve) =>{
  const response = await fetch('http://localhost:8080/brands') 
  const data = await response.json();   
  resolve({data}) 
  }
  );
} 