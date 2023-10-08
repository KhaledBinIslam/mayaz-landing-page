// Get references to the buttons and divs
const reviewBtn = document.getElementById("reveiw-btn");
const desccriptionBtn = document.getElementById("description-btn");
const review = document.getElementById("review");
const desccription = document.getElementById("description");

// Add click event listeners to the buttons
reviewBtn.addEventListener("click", () => {
    // Toggle visibility of div1 and hide div2
    if (review.style.display === "none") {
        review.style.display = "block";
        desccription.style.display = "none";
    } else {
        review.style.display = "none";
    }
});

desccriptionBtn.addEventListener("click", () => {
    // Toggle visibility of div2 and hide div1
    if (desccription.style.display === "none") {
        desccription.style.display = "block";
        review.style.display = "none";
    } else {
        desccription.style.display = "none";
    }
});


// const productDecrease = document.getElementById("product-decrease")
// const productIncrease = document.getElementById("product-increase")
// let productInputField = document.getElementById("product-input-field")
// const productTotalPrice = document.getElementById("product-total-price")


// // updateProductTotalPrice

// function updateTotalProductPrice(isIncrease, input, total) {
//     const productInput = input.value
//     if (isIncrease == true) {
//         ProductInputValue = parseInt(productInput) + 1
//     }
//     else if (isIncrease == false && productInput > 0) {
//         ProductInputValue = parseInt(productInput) - 1
//     }

//     input.value = ProductInputValue
//     if (total == productTotalPrice) {
//         total.innerText = parseInt(1320 * ProductInputValue)
//     }
//     else {
//         total.innerText = parseInt(59 * ProductInputValue)
//     }



// }
// //  Increase and decrease event handle

// productDecrease.addEventListener('click', function () {
//     updateTotalProductPrice(false, productInputField, productTotalPrice)


// })
// productIncrease.addEventListener('click', function () {
//     updateTotalProductPrice(true, productInputField, productTotalPrice)

// })


// emial js added 

function sendEmail() {
    console.log('click')
    var params = {
        name: document.getElementById("name").value,
        number: document.getElementById("number").value,
        address: document.getElementById("address").value,
        // quantity: document.getElementById("quantity").value,
    }
    console.log(params);
    const serviceID = "service_9ahjpfa";
    const templateID = "template_s85o54o";

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("number").value = "";
            document.getElementById("address").value = "";
            // document.getElementById("quantity").value = "";
            console.log(res);
            alert("We have received your message,thank you");
        })
        .catch((error) => console.log(error));
};

