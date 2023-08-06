  
  interface mutateParams {
    url: string,
    formdata: string
  }
  
  export const tradeJournalMutation = (params: mutateParams) => {

    return fetch(params.url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: params.formdata
    }) 
    .then(result => result.json());
}