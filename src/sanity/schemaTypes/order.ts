 const order = {
  name: "order",
  type: "document",
  title: "Orders",
  fields: [
    {
      name: "userId",
      type: "string",
      title: "User ID",
    },
    {
      name: "totalPrice",
      type: "number",
      title: "Total Price",
    },
    {
      name: "status",
      type: "string",
      title: "Order Status",
      options: {
        list: ["Pending", "Shipped", "Delivered", "Cancelled"],
      },
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Order Date",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
      },
    },
  ],
};

export default order