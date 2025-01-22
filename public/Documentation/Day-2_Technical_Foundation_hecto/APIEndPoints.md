# API Endpoint: /products

## Overview
The `/products` endpoint is used to fetch all available products from the database. It provides a list of products, including details such as name, price, stock level, category, and rating. This endpoint is critical for displaying product information to users on the frontend.

---

## Endpoint Details

- **URL:** `/products`
- **Method:** `GET`
- **Description:** Fetches all available products from the Sanity CMS.

---

## Response Format
The response is returned in JSON format and includes an array of product objects.

### **Success Response**
- **Status Code:** `200 OK`
- **Example Response:**
  ```json
  [
    {
      "id": "1",
      "name": "Product A",
      "price": 100,
      "stock": 20,
      "image": "https://abc.com/images/productA.jpg",
      "category": "Electronics",
      "rating": 4.5
    },
    {
      "id": "2",
      "name": "Product B",
      "price": 50,
      "stock": 15,
      "image": "https://abc.com/images/productB.jpg",
      "category": "Plastic Chairs",
      "rating": 4.2
    }
  ]
  ```

### **Error Responses**
1. **If the database is unreachable:**
   - **Status Code:** `500 Internal Server Error`
   - **Example Response:**
     ```json
     {
       "error": "Unable to fetch products. Please try again later."
     }
     ```

2. **If no products are available:**
   - **Status Code:** `404 Not Found`
   - **Example Response:**
     ```json
     {
       "error": "No products found."
     }
     ```

---

## Example Usage
### **Request**
- **HTTP Method:** GET
- **URL:** `/products`

### **cURL Example**
```bash
curl -X GET https://677d.mockapi.io/api/v1/products
```

### **Next.js (TypeScript) Example**
```typescript
import { GetServerSideProps } from 'next';

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  image: string;
  category: string;
  rating: number;
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch('https://677d.mockapi.io/api/v1/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const products: Product[] = await response.json();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: {
        products: [],
      },
    };
  }
};

const ProductsPage = ({ products }: { products: Product[] }) => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <img src={product.image} alt={product.name} width="100" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
```

---

## Notes
- Ensure that the endpoint is protected if required, using appropriate authentication mechanisms (e.g., API keys or OAuth).
- Test the endpoint for performance and error handling during high-traffic scenarios.
- Use caching for frequently requested data to improve performance.
