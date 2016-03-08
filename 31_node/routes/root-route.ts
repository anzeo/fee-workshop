export function getRoot(request, response){
    response.send({
        _links: {
            items: 'http://localhost:1337/item'
        }
    });
}