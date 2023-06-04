const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hola, mundo')
});

app.get('/nuevaruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});
app.get('/products', (req, res) => {
  res.json([
    {
      name:'product 1',
      price: 200
    },
    {
      name: 'product 2',
      price: 300
    }
  ]);
});

app.get('/products/:id', (req, res) => {
  const {id} = req.params;
    res.json({
      id,
    name: 'product 2',
      price: 300
  })
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
