document.addEventListener("DOMContentLoaded", () => {
    console.log("BDG5566 Website Loaded");

    const btn = document.querySelector(".btn");

    if (btn) {
        btn.addEventListener("click", () => {
            alert("Welcome to BDG5566!");
        });
    }
});
