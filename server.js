const express = require ('express');
const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send(`<h2>Welcome to the Ice Cream Shop!</h2>`);
});

app.get('/flavors', (req, res, next) => {
    res.send([
        {
          id: 1,
					flavor: "Vanilla",
					is_favorite: 0,
          created_at: {Date},
          updated_at: {Date},
        },

				{
          id: 2,
					flavor: "Dulce de Leche",
          is_favorite: 1,
					created_at: {Date},
          updated_at: {Date},
        },

				{
          id: 3,
					flavor: "Superman",
          is_favorite: 0,
          created_at: {Date},
				  updated_at: {Date},
        },
				
				{
          id: 4,
					flavor: "Mango",
          is_favorite: 0,
          created_at: {Date},
					updated_at: {Date},
        },

    ])
});

app.delete('/', (req, res, next) => {
  res.send(`<h2>Welcome to the Ice Cream Shop!</h2>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`listening on port ${PORT}`)});


export default Server;