import express, { Router } from "express";
import cors from "cors";


import { Request, Response } from "express";


const router = Router()


const app = express()
app.use(cors())
app.use(express.json())
app.use(router)


const products = [
    { 
      name: 'Água',
      image: '/garrafa2.png',
      price: 5.50,
      description: 'Garrafa de 500ml de água mineral sem gás.',
      type: "drink",
      id: 1
    },
    { 
      name: 'Refrigerante',
      image: '/garrafa2.png',
      price: 6.30,
      description: 'Lata de 350ml de Coca Cola',
      type: "drink",
      id: 2
    },
    { 
      name: 'Chá Gelado',
      image: '/garrafa2.png',
      price: 7.99,
      description: 'Garrafinha de 300ml de chá gelado sabor pêssego.',
      type: "drink",
      id: 3
    },
    { 
      name: 'Salgado',
      image: '/enroladinho.png',
      price: 7.30,
      description: 'Delicioso enroladinho de salsicha frito.',
      type: "food",
      id: 4
    },
    { 
      name: 'Pastel',
      image: '/enroladinho.png',
      price: 9.50,
      description: 'Pastel recheado de queijo com massa feita na loja.',
      type: "food",
      id: 5
    },
    { 
      name: 'Esfirra',
      image: '/enroladinho.png',
      price: 6.20,
      description: 'Esfirra de carne com catupiry.',
      type: "food",
      id: 6
    },
    { 
      name: 'Sorvete',
      image: '/brownie.jpg',
      price: 11.90,
      description: 'Potinho de sorvete de 250ml sabor morango.',
      type: "dessert",
      id: 7
    },
    { 
      name: 'Brownie',
      image: '/brownie.jpg',
      price: 8.20,
      description: 'Uma fatia de brownie fresquinho.',
      type: "dessert",
      id: 8
    },
    { 
      name: 'Chocolate',
      image: '/brownie.jpg',
      price: 14.45,
      description: '70 gramas de chocolate meio amargo artesanal.',
      type: "dessert",
      id: 9
    }
  ];

router.get('/api/products', (req, res) => {
    res.json(products);
});


app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333')
})
