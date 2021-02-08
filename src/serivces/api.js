/* - - - - - - - - - - - - - - - - - - - - - GLOBAL VALUES - - - - - - - - - - - - - - - - - - - - - - */
const REQUEST_URL = 'https://morning-hamlet-18619.herokuapp.com/api/v1/'; //URL to test environment


/* - - - - - - - - - - - - - - - - - - - - - - API SERVICE - - - - - - - - - - - - - - - - - - - - - - - */
export function sendTest( firstname, lastname, cellphone ) {
    let details = {
        firstname : firstname,
        lastname: lastname,
        cellphone: cellphone
    };  let body = JSON.stringify( details );
    
    return fetch( REQUEST_URL+"/form",{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: body
    }).then(( response ) => response.json())
} //Yapsi-Pay transaction confirm


export function peopleTeam() {
    return fetch( REQUEST_URL + '/names', {
        method: 'GET',
    }).then(( response ) => response.json());
} //Transaction types
