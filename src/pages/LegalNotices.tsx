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
              
            <div class="content">
        <div class="section">
            <h2>1. INFORMATIONS LÉGALES</h2>
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">Raison sociale</div>
                    <div class="info-value">CHAPOZ</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Numéro SIRET</div>
                    <div class="info-value">845 316 975 00018 <span class="placeholder">[5 chiffres à compléter]</span></div>
                </div>
                <div class="info-item">
                    <div class="info-label">Forme juridique</div>
                    <div class="info-value placeholder">SAS</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Capital social</div>
                    <div class="info-value placeholder">1000 €</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Siège social</div>
                    <div class="info-value placeholder">97118 Saint-François</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Téléphone</div>
                    <div class="info-value placeholder">06 91 24 23 68</div>
                </div>
                <div class="info-item">
                    <div class="info-label">E-mail</div>
                    <div class="info-value placeholder">[À compléter]</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Directeur de publication</div>
                    <div class="info-value placeholder">[Nom du dirigeant]</div>
                </div>
            </div>
        </div>

        <div class="section">
            <h2>2. HÉBERGEMENT</h2>
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">Hébergeur du site</div>
                    <div class="info-value placeholder">[Nom de l'hébergeur]</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Adresse</div>
                    <div class="info-value placeholder">[Adresse de l'hébergeur]</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Téléphone</div>
                    <div class="info-value placeholder">[Téléphone de l'hébergeur]</div>
                </div>
            </div>
        </div>

        <div class="section">
            <h2>3. PROPRIÉTÉ INTELLECTUELLE</h2>
            <p>L'ensemble des contenus présents sur ce site (textes, images, vidéos, logos, icônes, etc.) est protégé par les dispositions du <span class="highlight">Code de la Propriété Intellectuelle</span> et par les conventions internationales relatives au droit d'auteur. Ces contenus ne peuvent être reproduits, utilisés ou représentés sans l'autorisation expresse de CHAPOZ.</p>
            <p>Les marques et logos présents sur le site sont déposés par CHAPOZ ou par des tiers ayant autorisé CHAPOZ à les utiliser. Toute reproduction ou représentation, totale ou partielle, de ces marques et logos, effectuée à partir des éléments du site sans l'autorisation expresse de CHAPOZ est prohibée.</p>
        </div>

        <div class="section">
            <h2>4. DONNÉES PERSONNELLES</h2>
            <p>Conformément au <span class="highlight">Règlement Général sur la Protection des Données (RGPD)</span> et à la loi "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition concernant vos données personnelles.</p>
            
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">Responsable du traitement</div>
                    <div class="info-value">CHAPOZ</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Finalités du traitement</div>
                    <div class="info-value placeholder">[À préciser selon votre activité]</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Base légale</div>
                    <div class="info-value">Consentement et/ou intérêt légitime</div>
                </div>
            </div>

            <p>Pour exercer vos droits, vous pouvez nous contacter à l'adresse : <span class="placeholder">[adresse e-mail]</span> ou par courrier postal à l'adresse du siège social.</p>
        </div>

        <div class="section">
            <h2>5. COOKIES</h2>
            <p>Ce site utilise des <span class="highlight">cookies</span> pour améliorer votre expérience de navigation et réaliser des statistiques de visite. Vous pouvez à tout moment modifier vos préférences en matière de cookies depuis les paramètres de votre navigateur.</p>
        </div>

        <div class="section">
            <h2>6. RESPONSABILITÉ</h2>
            <p>CHAPOZ s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, CHAPOZ ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.</p>
            <p>CHAPOZ ne pourra être tenue responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au site, et résultant de l'apparition d'un bug ou d'une incompatibilité.</p>
        </div>

        <div class="section">
            <h2>7. LIENS HYPERTEXTES</h2>
            <p>Le site peut contenir des <span class="highlight">liens hypertextes</span> vers d'autres sites présents sur le réseau Internet. CHAPOZ ne saurait être responsable du contenu de ces sites externes.</p>
        </div>

        <div class="section">
            <h2>8. DROIT APPLICABLE</h2>
            <p>Les présentes mentions légales sont régies par le <span class="highlight">droit français</span>. En cas de litige, les tribunaux français seront seuls compétents.</p>
        </div>

        <div class="section">
            <h2>9. CONTACT</h2>
            <div class="contact-info">
                <h3>Pour toute question relative aux présentes mentions légales :</h3>
                <div class="contact-list">
                    <div class="contact-item">
                        <strong>E-mail</strong><br>
                        <span class="placeholder">hello@gogogo-studio.fr</span>
                    </div>
                    <div class="contact-item">
                        <strong>Téléphone</strong><br>
                        <span class="placeholder">0691 24 23 68</span>
                    </div>
     
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <p>Dernière mise à jour : <span class="placeholder">1er septembre 2025</span></p>
    </div>
</div>
      </section>
    </div>
  );
};

export default LegalNotices;
