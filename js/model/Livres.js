export class Livre {
  constructor(titre, auteur, genre, statut, commentaire = "") {
    this.titre = titre;
    this.auteur = auteur;
    this.genre = genre;
    this.statut = statut;
    this.commentaire = commentaire;
  }
}
