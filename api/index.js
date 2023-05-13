import express from 'express';
import { Router } from 'express';
import cors from 'cors';
import axios from 'axios';
const app = express();
const route = Router();






app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});




import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 30 * 1000, // 30 segundos
  max: 2, // limit each IP to 1 request per windowMs
  message: 'Limite de requisições excedido, aguarde 30 segundos antes de tentar novamente.',
});
app.use(limiter);


//==========CPF=========CPF===========CPF=============================
route.get('/cpf1/:cpf', limiter, async (req, res) => {
  try {
    // Se chegamos até aqui, a requisição não ultrapassou o limite de requisições
    const cpf = req.params.cpf;
    const response = await axios.get(`https://p7api.xyz/puxadascom/sky/cpf1/${cpf}`);
    
    // Adiciona a resposta da API à propriedade 'locals' do objeto de resposta
    res.locals.response = response.data;
    
    return res.json(response.data);
  } catch (error) {
    // Adiciona a mensagem de erro à propriedade 'locals' do objeto de resposta
    res.locals.error = error.message;
    console.log(error);
    return res.json({ error: error.message });
  }
});

route.get('/cpf2/:cpf',limiter, async (req, res) => {
    try {
      const cpf = req.params.cpf;
      const response = await axios.get(`https://p7api.xyz/puxadascom/sky/cpf2/${cpf}`);
      return res.json(response.data);
    } catch (error) {
      console.log(error);
      return res.json({ error: error.message });
    }
  });

  
  route.get('/cpf3/:cpf',limiter, async (req, res) => {
    try {
      const cpf = req.params.cpf;
      const response = await axios.get(`https://p7api.xyz/puxadascom/sky/cpf3/${cpf} `);
      return res.json(response.data);
    } catch (error) {
      console.log(error);
      return res.json({ error: error.message });
    }
  });

  route.get('/cpf4/:cpf',limiter, async (req, res) => {
    try {
      const cpf = req.params.cpf;
      const response = await axios.get(`https://p7api.xyz/puxadascom/mk/cpf1/${cpf} `);
      return res.json(response.data);
    } catch (error) {
      console.log(error);
      return res.json({ error: error.message });
    }
  });

//===================================DDDDDDDDDDDDDDDDDD========================================
route.get('/cpf5/:cpf',limiter, async (req, res) => {
  try {
    const cpf = req.params.cpf;
    const response = await axios.get(`https://p7api.xyz/puxadascom/mk/cpf2/${cpf}`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});

route.get('/cpf6/:cpf',limiter, async (req, res) => {
    try {
      const cpf = req.params.cpf;
      const response = await axios.get(`https://holmes-apisfull.up.railway.app/puxadascom/mk/cpf3/${cpf}`);
      return res.json(response.data);
    } catch (error) {
      console.log(error);
      return res.json({ error: error.message });
    }
  });

  
  route.get('/cpf7/:cpf',limiter, async (req, res) => {
    try {
      const cpf = req.params.cpf;
      const response = await axios.get(`https://p7api.xyz/puxadascom/mk/cpf4/${cpf}`);
      return res.json(response.data);
    } catch (error) {
      console.log(error);
      return res.json({ error: error.message });
    }
  });

  route.get('/cpf8/:cpf',limiter, async (req, res) => {
    try {
      const cpf = req.params.cpf;
      const response = await axios.get(`https://p7api.xyz/puxluk/cpf4/${cpf} `);
      return res.json(response.data);
    } catch (error) {
      console.log(error);
      return res.json({ error: error.message });
    }
  });

  
  route.get('/cpf9/:cpf',limiter, async (req, res) => {
    try {
      const cpf = req.params.cpf;
      const response = await axios.get(`https://p7api.xyz/puxluk/cpf3/${cpf} `);
      return res.json(response.data);
    } catch (error) {
      console.log(error);
      return res.json({ error: error.message });
    }
  });

  route.get('/cpf10/:cpf',limiter, async (req, res) => {
    try {
      const cpf = req.params.cpf;
      const response = await axios.get(`https://p7api.xyz/puxluk/cpf4/${cpf} `);
      return res.json(response.data);
    } catch (error) {
      console.log(error);
      return res.json({ error: error.message });
    }
  });

//====================PLACAAAAAAAAAAAA===================


//=====TESET PARA PLACA MKBUSCAS TRANSITO======
route.get('/placa0/:placa',limiter, async (req, res) => {
    try {
      const placa = req.params.placa;
      const response = await axios.get(`https://hlmsy-production.up.railway.app/api/puxar?token=39tVOCQu&type=placa1&q=${placa}`);
      return res.json(response.data);
    } catch (error) {
      console.log(error);
      return res.json({ error: error.message });
    }
  });
//=====TESET PARA PLACA MKBUSCAS TRANSITO======
route.get('/cpf0/:cpf',limiter, async (req, res) => {
    try {
      const cpf = req.params.cpf;
      const response = await axios.get(`https://hlmsy-production.up.railway.app/api/puxar?token=mpOp6P2q&type=cpf4&q=${cpf}`);
      return res.json(response.data);
    } catch (error) {
      console.log(error);
      return res.json({ error: error.message });
    }
  });





route.get('/placa1/:placa',limiter, async (req, res) => {
    try {
      const placa = req.params.placa;
      const response = await axios.get(`https://p7api.xyz/puxadascom/mk/placa1/${placa}`);
      return res.json(response.data);
    } catch (error) {
      console.log(error);
      return res.json({ error: error.message });
    }
  });
  
  route.get('/placa2/:placa',limiter, async (req, res) => {
    try {
      const placa = req.params.placa;
      const response = await axios.get(`https://p7api.xyz/puxadascom/sky/placa/${placa}`);
      return res.json(response.data);
    } catch (error) {
      console.log(error);
      return res.json({ error: error.message });
    }
  });

route.get('/placa3/:placa',limiter, async (req, res) => {
  try {
    const placa = req.params.placa;
    const response = await axios.get(`https://p7api.xyz/Puxluk2/placa/${placa}`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});

route.get('/placa4/:placa',limiter, async (req, res) => {
  try {
    const placa = req.params.placa;
    const response = await axios.get(` https://p7api.xyz/puxadascom/detran/placa/${placa}
`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});
  


//===================TELEFONE====================




route.get('/telefone1/:telefone',limiter, async (req, res) => {
    try {
      const telefone = req.params.telefone;
      const response = await axios.get(`https://p7api.xyz/puxadascom/sky/telefone/${telefone}`);
      return res.json(response.data);
    } catch (error) {
      console.log(error);
      return res.json({ error: error.message });
    }
  });

  route.get('/telefone2/:telefone',limiter, async (req, res) => {
    try {
      const telefone = req.params.telefone;
      const response = await axios.get(`https://p7api.xyz/puxadascom/mk/tel2/${telefone}`);
      return res.json(response.data);
    } catch (error) {
      console.log(error);
      return res.json({ error: error.message });
    }
  });

  route.get('/telefone3/:telefone',limiter, async (req, res) => {
    try {
      const telefone = req.params.telefone;
      const response = await axios.get(`https://p7api.xyz/puxadascom/mk/tel3/${telefone}`);
      return res.json(response.data);
    } catch (error) {
      console.log(error);
      return res.json({ error: error.message });
    }
  });


  
//===========================NOMEEEEEEEEEEE===============================================



route.get('/nome/:nome',limiter, async (req, res) => {
    try {
      const nome = req.params.nome;
      const response = await axios.get(`https://p7api.xyz/puxadascom/sky/nome/${nome}`);
      return res.json(response.data);
    } catch (error) {
      console.log(error);
      return res.json({ error: error.message });
    }
  });


  route.get('/nome2/:nome',limiter, async (req, res) => {
    try {
      const nome = req.params.nome;
      const response = await axios.get(`https://p7api.xyz/puxadascom/mk/nome/${nome}`);
      return res.json(response.data);
    } catch (error) {
      console.log(error);
      return res.json({ error: error.message });
    }
  });





route.get('/rg/:rg',limiter, async (req, res) => {
  try {
    const rg = req.params.rg;
    const response = await axios.get(`https://p7api.xyz/puxadascom/mk/cns/${rg}
`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});



//==========CPF=========CPF===========CPF=============================

route.get('/email/:email',limiter, async (req, res) => {
  try {
    const email= req.params.email;
    const response = await axios.get(`https://p7api.xyz/puxluk/email/${email}`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});



//==========CPF=========CPF===========CPF=============================

route.get('/covid/:covid',limiter, async (req, res) => {
  try {
    const covid= req.params.covid;
    const response = await axios.get(` https://wlrd.live/covid/${covid}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoicGVpeG90byIsImlhdCI6MTY4MjUzNTg4NSwiZXhwIjoxNjg0NzgyMjg1fQ.xR4BBkOWPEtJVdwX_txfrIEYwyfnzWLI0mYSsoGxupQ`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});




route.get('/score/:score',limiter, async (req, res) => {
  try {
    const score= req.params.score;
    const response = await axios.get(`https://p7api.xyz/puxadascom/mk/score/${score}`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});

route.get('/mae/:mae',limiter, async (req, res) => {
  try {
    const mae= req.params.mae;
    const response = await axios.get(` https://wlrd.live/mae/${mae}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoicGVpeG90byIsImlhdCI6MTY4MjUzNTg4NSwiZXhwIjoxNjg0NzgyMjg1fQ.xR4BBkOWPEtJVdwX_txfrIEYwyfnzWLI0mYSsoGxupQ`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});


route.get('/cnpj/:cnpj',limiter, async (req, res) => {
  try {
    const cnpj = req.params.cnpj;
    const response = await axios.get(`https://p7api.xyz/puxadascom/mk/cnpj/${cnpj}`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});

route.get('/cnpj2/:cnpj',limiter, async (req, res) => {
  try {
    const cnpj = req.params.cnpj;
    const response = await axios.get(`https://p7api.xyz/puxadascom/sky/cnpj/${cnpj}`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});




route.get('/vizinho/:vizinho',limiter, async (req, res) => {
  try {
    const vizinho = req.params.vizinho;
    const response = await axios.get(`https://p7api.xyz/puxadascom/mk/vizinhos/${vizinho}`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});

route.get('/beneficio/:beneficio',limiter, async (req, res) => {
  try {
    const beneficio = req.params.beneficio;
    const response = await axios.get(`https://p7api.xyz/puxadascom/mk/beneficios/${beneficio}`);
    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
});



app.use('/api', route);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
