# Sanity CMS Schemas

## Product Schema
Defines the structure for managing product data in the marketplace.
```javascript
export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    { name: 'name', type: 'string', title: 'Product Name' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'price', type: 'number', title: 'Price' },
    { name: 'image', type: 'image', title: 'Product Image' },
    { name: 'category', type: 'string', title: 'Category' },
    { name: 'stockLevel', type: 'number', title: 'Stock Level' },
    { name: 'rating', type: 'number', title: 'Rating', options: { min: 0, max: 5 } },
  ],
};
```

---

## Order Schema
Defines the structure for managing order data in the marketplace.
```javascript
export default {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    { name: 'orderID', type: 'string', title: 'Order ID' },
    { name: 'customerID', type: 'reference', to: [{ type: 'customer' }], title: 'Customer' },
    { name: 'products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }], title: 'Products' },
    { name: 'totalAmount', type: 'number', title: 'Total Amount' },
    { name: 'status', type: 'string', title: 'Order Status', options: { list: ['Pending', 'Shipped', 'Completed', 'Cancelled'] } },
    { name: 'orderDate', type: 'datetime', title: 'Order Date' },
  ],
};
```

---

## Customer Schema
Defines the structure for managing customer data in the marketplace.
```javascript
export default {
  name: 'customer',
  type: 'document',
  title: 'Customer',
  fields: [
    { name: 'name', type: 'string', title: 'Customer Name' },
    { name: 'email', type: 'string', title: 'Email Address' },
    { name: 'password', type: 'string', title: 'Password', hidden: true },
    { name: 'address', type: 'text', title: 'Shipping Address' },
    { name: 'orderHistory', type: 'array', of: [{ type: 'reference', to: [{ type: 'order' }] }], title: 'Order History' },
  ],
};
```

The order schema will manage information about user purchases.

