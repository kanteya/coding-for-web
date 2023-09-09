function updateYear(value) {
    const yearSpan = document.getElementById("year");
    switch (value) {
        case "1":
            yearSpan.textContent = "1939";
            break;
        case "2":
            yearSpan.textContent = "1942";
            break;
        case "3":
            yearSpan.textContent = "1945";
            break;
        default:
            yearSpan.textContent = "1939";
    }
}
