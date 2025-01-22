'use client'

import { useState, useEffect } from "react";
import { Product } from "../../data/products";
import Link from "next/link";
import { Button } from "./ui/button";

const SearchBar = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fetch product data from Sanity CMS
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        const res = await fetch(`/api/products`);
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      finally {
        setIsLoading(false)
      }
    };

    fetchProducts();
  }, [filteredProducts]);


  // Debounce function for optimizing search input handling
  const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  // Handle Search with Debounce
  const handleSearch = debounce((term: string) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    if (term === ""){
      setFilteredProducts([])
    } else {
      setFilteredProducts(filtered);
    }
  }, 300);

  // Update search term and trigger filtering
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };


  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Search Input */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
      </div>

      {/* Loading Indicator */}
      {isLoading && <p className="text-center mt-4 text-gray-500">Loading...</p>}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {filteredProducts.map((product) => (
          <div key={product._id} className="border p-4 rounded-md shadow-md flex flex-col items-center justify-between">
            <img
              src={product.image}
              alt={product.name}
              className="w-full object-cover rounded-md"
            />
            <div className="flex items-center gap-3">
            <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            </div>
            <Link href={`/product/${product._id}`}  className="w-full">
            <Button className="w-full">View Detail</Button>
            </Link>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {!isLoading && filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No products match your search.
        </p>
      )}
    </div>
  );
};

export default SearchBar;
