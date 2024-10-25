const accountId = 144553
let accountEmail = "ranjith@gmail.com"
var accountPass = "123456"
accountCity = "Siruguppa"

/*
Prefer not to use var
because of issue in bloack scope and functional scope
*/

accountEmail = "ranjithreddy@gmail.com"
accountPass = "147147"
accountCity = "Bellary"


console.log(accountId);
console.table([accountId, accountEmail, accountPass, accountCity])


