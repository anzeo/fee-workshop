export function getRoot(request, response){
    response.send({
        _links: {
            items: '/item'
        }
    });
}