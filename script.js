// change your api key in the place of html hidden input YOUR__API__KEY



const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
    const formData = new FormData(form);
    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });
    var json = JSON.stringify(object);
    result.innerHTML = "Please wait...";

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: json,
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            result.innerHTML = json.message;
        } else {
            console.log(response);
            result.innerHTML = json.message;
        }
    })
    .catch((error) => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
    })
    .then(function () {
        form.reset();
        setTimeout(() => {
            result.style.display = "none";
        }, 5000);
    });
});