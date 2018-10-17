
const NEW_COFFEE_ORDER_URL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"

let ordersList = document.getElementById('ordersList')

function displayOrders(data) {

   let liItems =``
   for (key in data) {
    let myOrder = data[key]
    liItems += `<li> ${myOrder.emailAddress} ordered ${myOrder.coffee}</li>`
  }
  ordersList.innerHTML = liItems
 }




function AllCoffeeOrders (){

fetch(NEW_COFFEE_ORDER_URL, {
  method: 'GET'
})
.then(  res => res.json()  )
.then(  response => displayOrders(response))
}



AllCoffeeOrders()
