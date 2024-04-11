
export function fetchAllProducts(amount = 1) { 

  //TODO : we not hardcode the endpoint of the server
  return new Promise(async(resolve) =>{
  const response = await fetch('http://localhost:8080/products') 
  const data = await response.json();  
  console.log(data)
  resolve({data}) 
  }
  );
}

export function fetchProductsByFilters(filter) { 
 

  let querryString = '' 
  for(let i in filter )
  {
    querryString += `${i}=${filter[i]}&`
  }
  //TODO : we not hardcode the endpoint of the server
  return new Promise(async(resolve) =>{
  const response = await fetch('http://localhost:8080/products?'+ querryString) 
  const data = await response.json();  
  console.log(data)
  resolve({data}) 
  }
  );
}