function startDrawing() {
    alert("🎨 Welcome to ArtNest! Let's create something beautiful.");
}

document.querySelectorAll(".bars div").forEach(function(bar) {
    bar.addEventListener("click", function() {
        alert("✨ This is one of your best creative hours!");
    });
});
