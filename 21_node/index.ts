import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as item from './routes/item-route';
import * as root from './routes/root-route';

var app = express();
app.use(bodyParser.json());

app.get('/', root.getRoot);

app.get('/item', item.getAllItems);
app.post('/item', item.createItem);
app.put('/item/:id', item.updateItem);

app.listen(1337, () => {
   console.log('Node server up & running @ http://localhost:1337');
});