const fileInput = document.getElementById("FileInput")
const readButton = document.getElementById("ReadButton")
const decodedUrl = document.getElementById("DecodedUrl")

readButton.addEventListener("click", async () => {

    const file = fileInput.files[0];
    if (!file) {
        alert("Please upload a QR code image file");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch("https://api.qrserver.com/v1/read-qr-code/", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            alert("Error : " + response.status);
            return;
        }

        const json = await response.json();
        const result = json[0].symbol[0];

        if (result.data) {
            let url = result.data;
            decodedUrl.textContent = url;
            decodedUrl.setAttribute("href", url);
        } else {
            const errorMsg = result.error;
            alert(errorMsg);
        }
    } catch (error) {
        alert("Error : " + error.message);
    }
});