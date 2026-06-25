function formatLibelle(text) {
    if (!text) return "";
    return text
        .replace(/\(G\)/g, "<strong>")
        .replace(/\(\/G\)/g, "</strong>")
        .replace(/\(I\)/g, "<i>")
        .replace(/\(\/I\)/g, "</i>")
        .replace(/\(S\)/g, "<u>")
        .replace(/\(\/S\)/g, "</u>")
        .replace(/\(R\)/g, "<span style='color:#d90429; font-weight:bold;'>") // Ajout du rouge
        .replace(/\(\/R\)/g, "</span>")        
        .replace(/\(GS\)/g, "<strong><u>")
        .replace(/\(\/GS\)/g, "</u></strong>")
        .replace(/\(Retour\)/g, "<br>")
        .replace(/\(Espace interligne\)/g, '<div style="margin-bottom:15px"></div>');
}

function displayProducts(data) {
    const container = document.getElementById('product-list');
    if (!data) {
        container.innerHTML = "<p>Aucune donnée trouvée.</p>";
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card';
        const coins = "🪙".repeat(item.Piece || 0);

        card.innerHTML = `
            <div class="product-image">
                <img src="../${item.Photo}" alt="${item.Titre}" onerror="this.src='../assets/images/default.jpg'">
            </div>
            <div class="product-content">
                <h2>${item.Titre}</h2>
                <div class="libelle-text">${formatLibelle(item.Libelle)}</div>
            </div>
            <div class="price-tag">${coins}</div>
        `;
        container.appendChild(card);
    });
}

// Bouton Scroll Top
const scrollBtn = document.getElementById("scrollTop");

// On n'active la logique que si le bouton existe dans la page
if (scrollBtn) {
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    };

    scrollBtn.onclick = function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
}