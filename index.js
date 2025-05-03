const textInput = document.getElementById("TextInput")
const submitButton = document.getElementById("SubmitButton");
const qrImage = document.getElementById("QRImage")
const imageUrl = document.getElementById("ImageUrl")

submitButton.addEventListener("click", () => {
    if (!textInput.value) {
        alert("Enter a valid URL!");
        return;
    }

    const newUrl = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + textInput.value;

    qrImage.setAttribute("src", newUrl);
    imageUrl.innerText = textInput.value;
    return;
})