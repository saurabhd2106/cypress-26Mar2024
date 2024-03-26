export class RestClient {
    sendGetRequest(endpointUrl) {

        return cy.request({
            method: 'GET',
            url: endpointUrl
            
        })

    }

    sendPostRequest(endpointUrl, requestHeaders, Payload){

        return cy.request({
            method: 'POST',
            headers: requestHeaders,
            url: endpointUrl,
            body: Payload
        })

    }

    sendPutRequest(endpointUrl, requestHeaders, Payload){

        return cy.request({
            method: 'PUT',
            headers: requestHeaders,
            url: endpointUrl,
            body: Payload
        })
        
    }

    sendDeleteRequest(endpointUrl){

        return cy.request({
            method: 'DELETE',
            url: endpointUrl
            
        })
        
    }



}

export const restClient = new RestClient()