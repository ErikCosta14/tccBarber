document.addEventListener("DOMContentLoaded", function() {
    const menuImage = document.getElementById("logIm");
    const topMenu = document.getElementById("menuLog");

    // Toggle do menu ao clicar na imagem
    menuImage.addEventListener("click", function() {
        if (topMenu.style.display === "none" || topMenu.style.display === "") {
            topMenu.style.display = "block";
        } else {
            topMenu.style.display = "none";
        }
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener("click", function(event) {
        if (event.target !== menuImage && !topMenu.contains(event.target)) {
            topMenu.style.display = "none";
        }
    });
});