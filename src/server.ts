import express, { response } from 'express';

const app = express();

const users = ['Irla', 'Alice', 'Lara'];

app.get('/users', (req, resp) => {
  return resp.json(users);
});

app.get('/users/:id', (req, resp) => {
  const id = Number(req.params.id);
  const user = users[id];
  console.log(user);
  return resp.json(user);
});
app.post('/users', (req, resp) => {
  const user = {
    name: 'Marcos',
    email: 'marcos@marcos.com',
  };

  return resp.json(user);
});

app.listen(3333);
