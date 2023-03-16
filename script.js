const wrapper = document.querySelector(".wrapper");
const fileName = document.querySelector(".file_name");
const customBtn = document.querySelector(".custom_btn");
const defaultBtn = document.querySelector("#default_btn");
const cancelBtn = document.querySelector("#cancel_btn");
const img = document.querySelector("img");

let regExp = /[0_9a_zA_Z\^\&\'\@\{\}\[\]\,\$\=\!\_\#\(\)\.\%\+/]/;

function defaultBtnActive() {
    defaultBtn.click();
}

defaultBtn.addEventListener("change", function() {
    const file = this.files[0];
    if(file) {
        const reader = new FileReader();
        reader.onload = function() {
            const result = reader.result;
            img.src = result;
            wrapper.classList.add("active");
        }  
        cancelBtn.addEventListener("click", function() {
            img.src = "";
            wrapper.classList.remove("active");
        })

        reader.readAsDataURL(file);
    }
    if(this.value) {
        let valueStore = this.value.match(regExp);
        fileName.textContent = valueStore;
    }
})