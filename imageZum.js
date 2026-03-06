document.addEventListener("click", function(e) {

    const img = e.target.closest(".zum");

    // если клик по картинке
    if (img) {

        const overlay = document.createElement("div");
        overlay.classList.add("image-overlay");

        const bigImg = document.createElement("img");
        bigImg.src = img.src;

        overlay.appendChild(bigImg);
        document.body.appendChild(overlay);

        return;
    }

    // если клик по затемнению — закрыть
    if (e.target.classList.contains("image-overlay")) {
        e.target.remove();
    }

});