(function () {
    "use strict";

    var products = window.LVC_PRODUCT_CATALOGUE;
    var categoryList = document.getElementById("catalogue-categories");
    var categorySelect = document.getElementById("catalogue-category-select");
    var productGrid = document.getElementById("catalogue-products");
    var searchInput = document.getElementById("catalogue-search");
    var sortSelect = document.getElementById("catalogue-sort");
    var resultCount = document.getElementById("catalogue-result-count");
    var emptyState = document.getElementById("catalogue-empty");
    var featuredList = document.getElementById("catalogue-featured");

    if (!Array.isArray(products) || !categoryList || !categorySelect || !productGrid || !searchInput || !sortSelect || !resultCount || !emptyState || !featuredList) {
        console.error("Could not initialize the product catalogue: required page elements or catalogue data are missing.");
        return;
    }

    function normalize(value) {
        return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("fr");
    }

    function formatProductTitle(value) {
        var title = value.toLocaleLowerCase("fr");
        title = title.charAt(0).toLocaleUpperCase("fr") + title.slice(1);
        return title.replace(/\b(ba\d+|pft|pvc|xps|pir|m\d+|t\d+)\b/gi, function (match) {
            return match.toLocaleUpperCase("fr");
        });
    }

    function createElement(tag, className, text) {
        var element = document.createElement(tag);
        if (className) element.className = className;
        if (text) element.textContent = text;
        return element;
    }

    var categoryCounts = new Map();
    var categoryImages = new Map();
    products.forEach(function (product) {
        product.categories.forEach(function (category) {
            categoryCounts.set(category, (categoryCounts.get(category) || 0) + 1);
            if (!categoryImages.has(category)) categoryImages.set(category, product.image);
        });
    });

    var categories = Array.from(categoryCounts.keys()).sort(function (first, second) {
        return first.localeCompare(second, "fr");
    });

    categories.forEach(function (category) {
        var option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    categories.forEach(function (category, index) {
        var label = createElement("label", "catalogue-category");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = category;
        checkbox.id = "catalogue-category-" + index;
        var text = createElement("span", "catalogue-category__name", category);
        var count = createElement("span", "catalogue-category__count", String(categoryCounts.get(category)));
        label.htmlFor = checkbox.id;
        label.append(checkbox, text, count);
        categoryList.appendChild(label);
    });

    var featuredCategories = categories.slice().sort(function (first, second) {
        return categoryCounts.get(second) - categoryCounts.get(first) || first.localeCompare(second, "fr");
    }).slice(0, 5);

    featuredCategories.forEach(function (category) {
        var button = createElement("button", "catalogue-featured-card");
        button.type = "button";
        button.dataset.category = category;
        button.setAttribute("aria-label", "Filtrer par catégorie " + category);
        var image = document.createElement("img");
        image.src = categoryImages.get(category);
        image.alt = "";
        image.loading = "lazy";
        var title = createElement("span", "catalogue-featured-card__title", category);
        button.append(image, title);
        button.addEventListener("click", function () {
            var checkbox = Array.from(categoryList.querySelectorAll("input")).find(function (input) {
                return input.value === category;
            });
            if (!checkbox) return;
            checkbox.checked = !checkbox.checked;
            var selected = Array.from(categoryList.querySelectorAll("input:checked"));
            categorySelect.value = selected.length === 1 ? selected[0].value : "";
            renderProducts();
        });
        featuredList.appendChild(button);
    });

    function createProductCard(product) {
        var productKey = normalize(product.title);
        var aliases = window.LVC_PRODUCT_CATALOGUE_ALIASES || {};
        var catalogueInfo = window.LVC_PRODUCT_CATALOGUE_INFO || [];
        var infoKey = normalize(aliases[productKey] || productKey);
        var details = catalogueInfo.find(function (item) {
            return normalize(item.name) === infoKey;
        });
        var card = createElement("article", "catalogue-product-card");
        var imageLink = document.createElement("a");
        imageLink.className = "catalogue-product-card__image-link";
        imageLink.href = product.href;
        imageLink.setAttribute("aria-label", "Voir " + product.title);
        var image = document.createElement("img");
        image.src = product.image;
        image.alt = product.title;
        image.loading = "lazy";
        imageLink.appendChild(image);

        var content = createElement("div", "catalogue-product-card__content");
        var category = createElement("p", "catalogue-product-card__category", product.categories[0] || "Produits LVC");
        var title = createElement("h2", "catalogue-product-card__title");
        var titleLink = document.createElement("a");
        titleLink.href = product.href;
        titleLink.textContent = formatProductTitle(product.title);
        title.appendChild(titleLink);
        content.append(category, title);

        if (details && details.brand) {
            content.appendChild(createElement("p", "catalogue-product-card__brand", details.brand));
        }
        var description = details && details.description
            ? details.description
            : "Consultez la fiche pour les caractéristiques et la disponibilité.";
        content.appendChild(createElement("p", "catalogue-product-card__description", description));

        var features = createElement("ul", "catalogue-product-card__features");
        var featureLabels = details && details.characteristics.length
            ? details.characteristics.slice(0, 2).map(function (item) { return item[0] + " : " + item[1]; })
            : [details && details.subcategory || product.categories[0] || "Produits LVC"];
        featureLabels.forEach(function (label) {
            features.appendChild(createElement("li", "", label));
        });

        var action = document.createElement("a");
        action.className = "catalogue-product-card__action";
        action.href = product.href;
        action.setAttribute("aria-label", "Voir le produit " + product.title);
        action.append(document.createTextNode("Voir le produit"), createElement("span", "", "→"));
        content.append(features, action);
        card.append(imageLink, content);
        return card;
    }

    function renderProducts() {
        var query = normalize(searchInput.value.trim());
        var selectedCategories = Array.from(categoryList.querySelectorAll("input:checked")).map(function (input) {
            return input.value;
        });
        if (categorySelect.value && selectedCategories.indexOf(categorySelect.value) === -1) {
            selectedCategories.push(categorySelect.value);
        }
        featuredList.querySelectorAll(".catalogue-featured-card").forEach(function (button) {
            button.setAttribute("aria-pressed", String(selectedCategories.indexOf(button.dataset.category) !== -1));
        });
        var visibleProducts = products.filter(function (product) {
            var matchesSearch = !query || normalize(product.title + " " + product.categories.join(" ")).indexOf(query) !== -1;
            var matchesCategory = !selectedCategories.length || product.categories.some(function (category) {
                return selectedCategories.indexOf(category) !== -1;
            });
            return matchesSearch && matchesCategory;
        });

        if (sortSelect.value === "name-asc" || sortSelect.value === "name-desc") {
            visibleProducts.sort(function (first, second) {
                var comparison = first.title.localeCompare(second.title, "fr");
                return sortSelect.value === "name-asc" ? comparison : -comparison;
            });
        }

        productGrid.replaceChildren();
        visibleProducts.forEach(function (product) {
            productGrid.appendChild(createProductCard(product));
        });
        resultCount.textContent = visibleProducts.length + (visibleProducts.length === 1 ? " produit trouvé" : " produits trouvés");
        emptyState.hidden = visibleProducts.length > 0;
        productGrid.hidden = visibleProducts.length === 0;
    }

    searchInput.addEventListener("input", renderProducts);
    sortSelect.addEventListener("change", renderProducts);
    categorySelect.addEventListener("change", function () {
        categoryList.querySelectorAll("input").forEach(function (checkbox) {
            checkbox.checked = checkbox.value === categorySelect.value;
        });
        renderProducts();
    });
    categoryList.querySelectorAll("input").forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            var selected = Array.from(categoryList.querySelectorAll("input:checked"));
            categorySelect.value = selected.length === 1 ? selected[0].value : "";
            renderProducts();
        });
    });

    var filterToggle = document.getElementById("catalogue-filter-toggle");
    var sidebar = document.getElementById("catalogue-sidebar");
    if (filterToggle && sidebar) {
        filterToggle.addEventListener("click", function () {
            var isOpen = sidebar.classList.toggle("is-open");
            filterToggle.setAttribute("aria-expanded", String(isOpen));
            filterToggle.textContent = isOpen ? "Masquer les filtres" : "Catégories et filtres";
        });
    }

    var clearFilters = document.getElementById("catalogue-clear-filters");
    if (clearFilters) {
        clearFilters.addEventListener("click", function () {
            searchInput.value = "";
            sortSelect.value = "relevance";
            categorySelect.value = "";
            categoryList.querySelectorAll("input:checked").forEach(function (checkbox) {
                checkbox.checked = false;
            });
            featuredList.querySelectorAll("[aria-pressed='true']").forEach(function (button) {
                button.setAttribute("aria-pressed", "false");
            });
            renderProducts();
        });
    }

    renderProducts();
}());
