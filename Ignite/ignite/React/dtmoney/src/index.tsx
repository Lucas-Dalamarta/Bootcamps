import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'API Test',
          amount: 1000,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date('2021-03-17 00:00:00')
        },
        {
          id: 2,
          title: 'API Test 2',
          amount: 2000,
          type: 'withdraw',
          category: 'Test',
          createdAt: new Date('2021-03-17 00:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {return this.schema.all('transaction')})

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
