import { Livre } from "../model/Livre.js";
import { LivreView } from "../view/LivreView.js";

export class LivreController {
  constructor() {
    this.livres = JSON.parse(localStorage.getItem("livres")) || [];
    this.view = new LivreView();
    this.view.afficherLivres(this.livres);

    this.initEvents();
  }

  initEvents() {
    document
      .getElementById("ajouter")
      .addEventListener("click", () => this.ajouterLivre());
    document
      .getElementById("rechercher")
      .addEventListener("input", (e) => this.rechercherLivre(e.target.value));
  }

  ajouterLivre() {
    const titre = document.getElementById("titre").value.trim();
    const auteur = document.getElementById("auteur").value.trim();
    const genre = document.getElementById("genre").value.trim();
    const statut = document.getElementById("statut").value;
    const commentaire = document.getElementById("commentaire").value.trim();

    if (!titre || !auteur || !genre) return;

    const livre = new Livre(titre, auteur, genre, statut, commentaire);
    this.livres.push(livre);
    this.sauvegarder();
    this.view.afficherLivres(this.livres);
  }

  rechercherLivre(motCle) {
    const filtrés = this.livres.filter((livre) =>
      livre.titre.toLowerCase().includes(motCle.toLowerCase())
    );
    this.view.afficherLivres(filtrés);
  }

  sauvegarder() {
    localStorage.setItem("livres", JSON.stringify(this.livres));
  }
}
