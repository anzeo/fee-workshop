import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as item from './routes/item-route';

var app = express();
app.use(bodyParser.json());

app.get('/item', item.getAllItems);
app.post('/item', item.createItem);
app.put('/item/:id', item.updateItem);

app.listen(1337, () => {
   console.log('Node server up & running @ http://localhost:1337');
});