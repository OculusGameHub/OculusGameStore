document.addEventListener("DOMContentLoaded", function() {
    // Disable Right Click
    document.addEventListener("contextmenu", function(event) {
        event.preventDefault();
        alert("Right-click is disabled.");
    });

    // Disable Text Selection
    document.addEventListener("selectstart", function(event) {
        event.preventDefault();
    });

    // Disable Copying
    document.addEventListener("copy", function(event) {
        event.preventDefault();
        alert("Copying content is disabled.");
    });

    // Disable Keyboard Shortcuts for Viewing Source & Inspecting
    document.addEventListener("keydown", function(event) {
        if (
            event.ctrlKey && (event.key === "c" || event.key === "u" || event.key === "s" || event.key === "p" || event.key === "i" || event.key === "j") || // Ctrl + C, U, S, P, I, J
            event.metaKey && (event.key === "c" || event.key === "u" || event.key === "s" || event.key === "p" || event.key === "i" || event.key === "j") || // Cmd (Mac) + C, U, S, P, I, J
            event.key === "F12" || event.key === "PrintScreen" // F12 DevTools & Print Screen
        ) {
            event.preventDefault();
            alert("This action is disabled for security reasons.");
        }
    });

    // Detect DevTools Open (Advanced Protection)
    setInterval(function() {
        if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
            document.body.innerHTML = "";
            alert("Inspecting is disabled.");
            window.location.href = "about:blank";
        }
    }, 500);
});
