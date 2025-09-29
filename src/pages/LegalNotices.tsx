import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const LegalNotices = () => {
  return (
    <div className="min-h-screen pb-10 bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Mentions Légales
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Agence CHAPOZ - Conformité légale et réglementaire
          </p>
        </div>
      </section>

      {/* Bouton Retour à l'accueil */}
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="outline">
            <Link
              to="/"
              className="inline-flex items-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Retour à l'accueil</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Contenu des mentions légales */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="space-y-8">
              
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">1. Informations légales</h2>
                <p className="text-muted-foreground mb-4">
                  Le présent site web est édité par :
                </p>
                <div className="bg-muted/20 p-4 rounded-lg space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground/70">Raison sociale</p>
                      <p className="text-foreground font-medium">CHAPOZ</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground/70">Numéro SIRET</p>
                      <p className="text-foreground font-medium">845 316 975 <span className="text-red-500 italic">[5 chiffres à compléter]</span></p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground/70">Forme juridique</p>
                      <p className="text-red-500 italic">SAS</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground/70">Capital social</p>
                      <p className="text-red-500 italic">1000 €</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground/70">Siège social</p>
                      <p className="text-red-500 italic">97118 SAINT-FRANÇOIS</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground/70">Téléphone</p>
                      <p className="text-red-500 italic">06 91 24 23 68</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground/70">E-mail</p>
                      <p className="text-red-500 italic">hello@gogogo-studio.fr</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground/70">Directeur de publication</p>
                      <p className="text-red-500 italic">CHARLES-BELAMOUR Gaëlle</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">2. Hébergement</h2>
                <p className="text-muted-foreground mb-4">
                  Le site est hébergé par :
                </p>
                <div className="bg-muted/20 p-4 rounded-lg">
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-semibold text-foreground/70">Hébergeur du site</p>
                      <p className="text-red-500 italic">[Nom de l'hébergeur]</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground/70">Adresse</p>
                      <p className="text-red-500 italic">[Adresse de l'hébergeur]</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground/70">Téléphone</p>
                      <p className="text-red-500 italic">[Téléphone de l'hébergeur]</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Propriété intellectuelle</h2>
                <p className="text-muted-foreground mb-4">
                  L'ensemble des contenus présents sur ce site (textes, images, vidéos, logos, icônes, etc.) est protégé par les dispositions du Code de la Propriété Intellectuelle et par les conventions internationales relatives au droit d'auteur. Ces contenus ne peuvent être reproduits, utilisés ou représentés sans l'autorisation expresse de CHAPOZ.
                </p>
                <p className="text-muted-foreground">
                  Les marques et logos présents sur le site sont déposés par CHAPOZ ou par des tiers ayant autorisé CHAPOZ à les utiliser. Toute reproduction ou représentation, totale ou partielle, de ces marques et logos, effectuée à partir des éléments du site sans l'autorisation expresse de CHAPOZ est prohibée.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Données personnelles</h2>
                <p className="text-muted-foreground mb-4">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition concernant vos données personnelles.
                </p>
                <div className="bg-muted/20 p-4 rounded-lg mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground/70">Responsable du traitement</p>
                      <p className="text-foreground font-medium">CHAPOZ</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground/70">Finalités du traitement</p>
                      <p className="text-red-500 italic">[À préciser selon votre activité]</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground/70">Base légale</p>
                      <p className="text-foreground font-medium">Consentement et/ou intérêt légitime</p>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Pour exercer vos droits, vous pouvez nous contacter à l'adresse : <span className="text-red-500 italic">[adresse e-mail]</span> ou par courrier postal à l'adresse du siège social.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Ce site utilise des cookies pour améliorer votre expérience de navigation et réaliser des statistiques de visite. Vous pouvez à tout moment modifier vos préférences en matière de cookies depuis les paramètres de votre navigateur.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">6. Responsabilité</h2>
                <p className="text-muted-foreground mb-4">
                  CHAPOZ s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, CHAPOZ ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                </p>
                <p className="text-muted-foreground">
                  CHAPOZ ne pourra être tenue responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au site, et résultant de l'apparition d'un bug ou d'une incompatibilité.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">7. Liens hypertextes</h2>
                <p className="text-muted-foreground">
                  Le site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. CHAPOZ ne saurait être responsable du contenu de ces sites externes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">8. Droit applicable</h2>
                <p className="text-muted-foreground">
                  Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">9. Contact</h2>
                <p className="text-muted-foreground mb-4">
                  Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <p className="font-semibold text-foreground mb-2">Par e-mail</p>
                      <p className="text-red-500 italic">hello@gogogo-studio.fr</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-foreground mb-2">Par téléphone</p>
                      <p className="text-red-500 italic">06 91 24 23 68</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-muted">
                <p className="text-center text-muted-foreground text-sm">
                  Dernière mise à jour : <span className="text-red-500 italic">1er septembre 2025</span>
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalNotices;
