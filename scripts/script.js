const booksButton = document.getElementById("booksButton");

booksButton.addEventListener("click", () => {
    const booksContainer = document.getElementById('booksContainer');

    
    if (booksContainer.classList.contains("d-none")) {
        booksContainer.classList.remove("d-none");
    } else {
        booksContainer.classList.add("d-none");
    }
});
