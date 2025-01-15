document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const filterSelect = document.getElementById("filter");
    const items = document.querySelectorAll(".art-item");

    searchInput.addEventListener("input", () => filterItems());
    filterSelect.addEventListener("change", () => filterItems());

    items.forEach(item => {
        item.addEventListener("click", () => {
            const views = parseInt(item.getAttribute("data-views")) + 1;
            item.setAttribute("data-views", views);
            item.querySelector("span").textContent = `Views: ${views}`;
        });
    });

    function filterItems() {
        const query = searchInput.value.toLowerCase();
        const category = filterSelect.value;
        items.forEach(item => {
            const name = item.querySelector("h3").textContent.toLowerCase();
            const itemCategory = item.getAttribute("data-category");
            if (
                (query === "" || name.includes(query)) &&
                (category === "all" || itemCategory === category)
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }
});

document.querySelectorAll(".art-item").forEach((item) => {
    item.addEventListener("click", (event) => {
        const url = item.getAttribute("data-url");
        if (url) {
            window.open(url, "_blank");
        }
    });
});

