import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as item from './routes/item-route';
import * as root from './routes/root-route';

var app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT");
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.get('/', root.getRoot);

app.get('/item', item.getAllItems);
app.post('/item', item.createItem);
app.put('/item/:id', item.updateItem);
app.get('/item/:id', item.getItem);

app.listen(80, () => {
   console.log('Node server up & running @ http://localhost:80');
});