export function createHyperMediaBuilder(): HyperMediaBuilder {
    return new HyperMediaBuilder();
}

class HyperMediaBuilder {

    resource: any;

    of(resource: any): HyperMediaBuilder{

        this.resource = resource;
        this.resource._links = {};
        this.resource._embedded = {};

        return this;
    }

    addEmbeddedResource(key: string, embeddedResource: any): HyperMediaBuilder{
        this.resource._embedded[key] = embeddedResource;
        return this;
    }

    addSelfLink(uri: string): HyperMediaBuilder{
        this.resource._links.self = uri;
        return this;
    }

    toJSON(){
        return this.resource;
    }
}