export class LivreView {
  constructor() {
    this.listeContainer = document.getElementById("listeLivres");
    this.vueGrilleBtn = document.getElementById("vueGrille");
    this.vueListeBtn = document.getElementById("vueListe");
    this.modeAffichage = "grille";

    this.vueGrilleBtn.addEventListener("click", () => this.setMode("grille"));
    this.vueListeBtn.addEventListener("click", () => this.setMode("liste"));
  }

  setMode(mode) {
    this.modeAffichage = mode;
    this.rendre(this.livres); // recharge la vue
  }

  afficherLivres(livres) {
    this.livres = livres;
    this.rendre(livres);
  }

  rendre(livres) {
    this.listeContainer.innerHTML = "";

    livres.forEach((livre) => {
      const div = document.createElement("div");
      div.className = this.modeAffichage === "grille" ? "carte" : "liste-item";
      div.innerHTML = `
          <strong>${livre.titre}</strong> - ${livre.auteur}<br/>
          <em>${livre.genre}</em> - ${livre.statut}<br/>
          <small>${livre.commentaire}</small>
        `;
      this.listeContainer.appendChild(div);
    });
  }
}
