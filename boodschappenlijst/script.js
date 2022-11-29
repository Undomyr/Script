// Table classes

const price = document.getElementsByClassName('productPrice')

const quantity = document.getElementsByClassName('productQuantity')

const total = document.getElementsByClassName('productTotalCost')

const sumTotal = document.getElementsByClassName('sumTotal')

// Table data

let tableElement = document.getElementById("tbl")

tableElement.addEventListener("change", productChange)

function productChange() {
	console.log('aantal producten is gewijzigd')

	let totalPrice = 0

	for (let i = 0; i < 4; i++) {
		console.log(quantity[i].value * price[i].innerHTML)
		total[i].innerHTML = parseFloat(quantity[i].value * price[i].innerHTML).toFixed(2)
		totalPrice += quantity[i].value * price[i].innerHTML
		sumTotal[0].innerHTML = totalPrice.toFixed(2)
	}
}



