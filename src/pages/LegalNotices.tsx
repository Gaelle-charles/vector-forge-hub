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
            Informations légales concernant le site web de GoGoGo Studio
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
                <h2 className="text-2xl font-bold mb-4 text-foreground">1. Éditeur du site</h2>
                <p className="text-muted-foreground mb-4">
                  Le présent site web est édité par :
                </p>
                <div className="bg-muted/20 p-4 rounded-lg">
                  <p className="text-foreground">
                    <strong>GoGoGo Studio</strong><br/>
                    Agence digitale spécialisée en intelligence artificielle<br/>
                    Email : contact@gogogo-studio.com
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">2. Hébergement</h2>
                <p className="text-muted-foreground mb-4">
                  Le site est hébergé par :
                </p>
                <div className="bg-muted/20 p-4 rounded-lg">
                  <p className="text-foreground">
                    <strong>Lovable</strong><br/>
                    Plateforme de développement web<br/>
                    Site web : https://lovable.dev
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Propriété intellectuelle</h2>
                <p className="text-muted-foreground mb-4">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="text-muted-foreground">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse de GoGoGo Studio.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Données personnelles</h2>
                <p className="text-muted-foreground mb-4">
                  Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p className="text-muted-foreground">
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse : contact@gogogo-studio.com
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. En continuant à naviguer sur ce site, vous acceptez l'utilisation de ces cookies.
                </p>
                <p className="text-muted-foreground">
                  Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient ne pas fonctionner correctement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">6. Responsabilité</h2>
                <p className="text-muted-foreground">
                  GoGoGo Studio s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, GoGoGo Studio ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">7. Droit applicable</h2>
                <p className="text-muted-foreground">
                  Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
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