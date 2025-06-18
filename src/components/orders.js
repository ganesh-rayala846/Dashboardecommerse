import React from 'react';
import './ecommerssite.css'

const orders = [
  { id: 'ORD5567', customer: 'Ganesh', status: 'Pending', amount: '$110', payment: 'Credit Card' },
  { id: 'ORD7343', customer: 'Ram Charan', status: 'Shipped', amount: '$430', payment: 'PhonePay' },
  
];

const OrdersTable = () => (
  <table className="orders-table">
    <thead>
      <tr>
        <th>Order ID</th>
        <th>Customer</th>
        <th>Status</th>
        <th>Amount</th>
        <th>Payment Method</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order) => (
        <tr key={order.id}>
          <td>{order.id}</td>
          <td>{order.customer}</td>
          <td>{order.status}</td>
          <td>{order.amount}</td>
          <td>{order.payment}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default OrdersTable;