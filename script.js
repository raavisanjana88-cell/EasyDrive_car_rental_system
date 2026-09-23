// Show Section

function show(id) {

    document
        .querySelectorAll("section")
        .forEach(function(section) {

            section.style.display = "none";

        });


    document.getElementById(id).style.display = "block";
}


// Search Cars

function searchCars() {

    let searchText =
        document.getElementById("search")
        .value
        .toLowerCase();


    document
        .querySelectorAll(".car")
        .forEach(function(car) {

            let carText =
                car.innerText.toLowerCase();


            if (carText.includes(searchText)) {

                car.style.display = "block";

            } else {

                car.style.display = "none";

            }

        });
}


// Show Create Account

function showCreate() {

    document.getElementById("loginBox")
        .style.display = "none";


    document.getElementById("createBox")
        .style.display = "block";
}


// Show Login

function showLogin() {

    document.getElementById("createBox")
        .style.display = "none";


    document.getElementById("loginBox")
        .style.display = "block";
}


// Create User

function createUser() {

    let name =
        document.getElementById("newUser").value;


    let password =
        document.getElementById("newPass").value;


    if (name == "" || password == "") {

        document.getElementById("createMsg")
            .innerHTML = "Enter all details.";

        return;
    }


    localStorage.setItem("user", name);

    localStorage.setItem("pass", password);


    document.getElementById("createMsg")
        .innerHTML =
        "Account created! Please login.";
}


// Login

function login() {

    let name =
        document.getElementById("loginUser").value;


    let password =
        document.getElementById("loginPass").value;


    if (!localStorage.getItem("user")) {

        document.getElementById("userMsg")
            .innerHTML =
            "Account not found. Please create an account.";

        return;
    }


    if (
        name == localStorage.getItem("user") &&
        password == localStorage.getItem("pass")
    ) {

        localStorage.setItem("login", "yes");


        document.getElementById("user")
            .innerHTML = name;


        document.getElementById("userMsg")
            .innerHTML =
            "Login successful! Welcome " + name + ".";


        setTimeout(function() {

            show("booking");

        }, 700);

    } else {

        document.getElementById("userMsg")
            .innerHTML =
            "Invalid login details. Try again.";

    }
}


// Select Car

function selectCar(price) {

    if (localStorage.getItem("login") != "yes") {

        alert("Please login before booking.");

        show("account");

        return;
    }


    document.getElementById("carSelect")
        .value = price;


    calculateTotal();


    show("booking");
}


// Calculate Total

function calculateTotal() {

    let price =
        Number(
            document.getElementById("carSelect").value
        );


    let days =
        Number(
            document.getElementById("days").value
        ) || 1;


    let total =
        price * days;


    document.getElementById("amount")
        .innerHTML = total;
}


// Book Car

function book() {

    if (localStorage.getItem("login") != "yes") {

        document.getElementById("bookMsg")
            .innerHTML =
            "Please login before booking.";

        return;
    }


    let date =
        document.getElementById("date").value;


    if (!date) {

        document.getElementById("bookMsg")
            .innerHTML =
            "Please select a pickup date.";

        return;
    }


    let carSelect =
        document.getElementById("carSelect");


    let car =
        carSelect.options[
            carSelect.selectedIndex
        ].text;


    let booking =
        localStorage.getItem("user")
        + " | "
        + car
        + " | "
        + document.getElementById("days").value
        + " day(s)"
        + " | "
        + date
        + " | ₹"
        + document.getElementById("amount").innerHTML
        + " | "
        + document.getElementById("paymentMethod").value;


    localStorage.setItem(
        "booking",
        booking
    );


    document.getElementById("bookMsg")
        .innerHTML =
        "Payment successful!<br>"
        + "Booking confirmed successfully!";
}


// Compare Cars

function compare() {

    let car1 =
        document.getElementById("car1");


    let car2 =
        document.getElementById("car2");


    if (car1.value == car2.value) {

        document.getElementById("compareMsg")
            .innerHTML =
            "Please select two different cars.";

        return;
    }


    let price1 =
        Number(car1.value);


    let price2 =
        Number(car2.value);


    let difference =
        Math.abs(price1 - price2);


    document.getElementById("compareMsg")
        .innerHTML =

        "<b>"
        + car1.options[car1.selectedIndex].text
        + "</b> → ₹"
        + price1
        + "/day<br>"

        + "<b>"
        + car2.options[car2.selectedIndex].text
        + "</b> → ₹"
        + price2
        + "/day<br>"

        + "<b>Price Difference:</b> ₹"
        + difference
        + "/day";
}


// Admin Login

function adminLogin() {

    let username =
        document.getElementById("adminUser").value;


    let password =
        document.getElementById("adminPass").value;


    if (
        username == "admin" &&
        password == "admin123"
    ) {

        document.getElementById("adminMsg")
            .innerHTML =
            "Admin login successful!";


        show("dashboard");

    } else {

        document.getElementById("adminMsg")
            .innerHTML =
            "Invalid admin login.";

    }
}


// Inventory

function inventory() {

    document.getElementById("adminResult")
        .innerHTML =

        "<b>Vehicle Inventory</b><br>"
        + "Hyundai i20 - Available<br>"
        + "Honda City - Available<br>"
        + "Mahindra XUV - Booked<br>"
        + "Tata Nexon - Available<br>"
        + "Toyota Innova - Maintenance";
}


// Booking Information

function bookingInfo() {

    let booking =
        localStorage.getItem("booking");


    if (!booking) {

        booking = "No bookings available.";

    }


    document.getElementById("adminResult")
        .innerHTML =

        "<b>Latest Booking</b><br>"
        + booking;
}


// Maintenance

function maintenance() {

    document.getElementById("adminResult")
        .innerHTML =

        "<b>Maintenance Schedule</b><br>"
        + "Hyundai i20 - Checked<br>"
        + "Honda City - Checked<br>"
        + "Mahindra XUV - Checked<br>"
        + "Tata Nexon - Checked<br>"
        + "Toyota Innova - Maintenance Due";
}