/* - - - - - - - - - - - - - - - - - - - - - GLOBAL VALUES - - - - - - - - - - - - - - - - - - - - - - */

const REQUEST_URL = 'https://morning-hamlet-18619.herokuapp.com/api/v1/'; //URL to test environment



/* - - - - - - - - - - - - - - - - - - - - - GLOBAL FUNCTIONS - - - - - - - - - - - - - - - - - - - - - - */
function convertToFrom(details) {
    var formBody = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return formBody;
} //URI component to UTF-8 scape sequence




/* - - - - - - - - - - - - - - - - - - - - - - API SERVICE - - - - - - - - - - - - - - - - - - - - - - - */
export function confirmCodeYP(token, pin, codePay) {
    let details = {
        transaction_token: codePay,
        pin: pin
    };  let formBody = convertToFrom(details)
    return fetch(REQUEST_URL+"/token/transaction/confirm",{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'bearer ' + token
        },
        body: formBody
    }).then((response)=> response.json())
} //Yapsi-Pay transaction confirm


export function peopleTeam() {
    return fetch(REQUEST_URL + '/names', {
        method: 'GET',
    }).then((response) => response.json());
} //Transaction types
