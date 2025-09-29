import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const LegalNotices = () => {
  return (
    <div className="min-h-screen pb-10 bg-white">
      {/* Hero Section */}

<section 
  className="relative pt-20 pb-16 bg-cover bg-center bg-no-repeat" 
  style={{ backgroundImage: "url('https://zsvnqforlvunxzphatey.supabase.co/storage/v1/object/public/Images/BLOG%20(2).png')" }}
>
  <div className="absolute inset-0 bg-black/50"></div> {/* overlay sombre pour lisibilité */}
  <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
      Mentions Légales
    </h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto">
      Agence CHAPOZ - Conformité légale et réglementaire
    </p>
  </div>
</section>


      
      {/* Bouton Retour à l'accueil */}
      <section className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="outline" className="border-black text-white hover:bg-black hover:text-[#E76F51]">
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
          <div className="space-y-12">
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">1. Informations légales</h2>
              <p className="text-black mb-4 leading-relaxed">
                Le présent site web est édité par CHAPOZ, société immatriculée sous le numéro SIRET 845 316 975 00018. La forme juridique de la société est SAS avec un capital social de 1000 €.
              </p>
              <p className="text-black mb-4 leading-relaxed">
                Le siège social est situé à l'adresse suivante : 97118 SAINT-FRANÇOIS. Pour toute correspondance, vous pouvez nous joindre par téléphone au 06 91 24 23 68 ou par courrier électronique à l'adresse hello@gogogo-studio.fr.
              </p>
              <p className="text-black leading-relaxed">
                Le directeur de la publication du site est CHARLES-BELAMOUR Gaëlle, en sa qualité de représentant légal de la société CHAPOZ.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">2. Hébergement</h2>
              <p className="text-black leading-relaxed">
                Le site web est hébergé par LOVABLE, dont le siège social est situé à Lovable Labs Sweden AB, Tunnelgatan 5, 11137 Stockholm, Sweden. L'hébergeur peut être contacté par mail : dpo@lovable.dev.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">3. Propriété intellectuelle</h2>
              <p className="text-black mb-4 leading-relaxed">
                L'ensemble des contenus présents sur ce site, incluant notamment les textes, images, vidéos, logos, icônes, graphismes et tout autre élément composant le site, est protégé par les dispositions du Code de la Propriété Intellectuelle et par les conventions internationales relatives au droit d'auteur. Ces contenus sont la propriété exclusive de CHAPOZ ou de ses partenaires et ne peuvent être reproduits, utilisés, représentés ou exploités de quelque manière que ce soit sans l'autorisation expresse et préalable de CHAPOZ.
              </p>
              <p className="text-black leading-relaxed">
                Les marques, logos et signes distinctifs présents sur le site sont déposés par CHAPOZ ou par des tiers ayant autorisé CHAPOZ à les utiliser. Toute reproduction, représentation, utilisation ou modification, totale ou partielle, de ces marques et logos, effectuée à partir des éléments du site sans l'autorisation expresse de CHAPOZ ou des titulaires des droits concernés est strictement interdite et constitue une contrefaçon sanctionnée par le Code de la Propriété Intellectuelle.
              </p>
            </div>

<div>
  <h2 className="text-3xl font-bold mb-6 text-black">4. Données personnelles</h2>
  <p className="text-black mb-4 leading-relaxed">
    Conformément au Règlement Général sur la Protection des Données (RGPD) du 27 avril 2016 et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation du traitement, de portabilité et d'opposition concernant vos données personnelles. Ces droits peuvent être exercés à tout moment en nous contactant aux coordonnées mentionnées dans les présentes mentions légales.
  </p>
  <p className="text-black mb-4 leading-relaxed">
    CHAPOZ est le responsable du traitement de vos données personnelles. Les données collectées sur ce site sont traitées pour les finalités suivantes : gestion des demandes de contact, élaboration et envoi de devis, suivi de la relation commerciale et contractuelle, envoi d’informations et de communications relatives aux services de CHAPOZ (newsletter, actualités, offres promotionnelles), ainsi que l’amélioration de la navigation et de l’expérience utilisateur sur le site.
  </p>
  <p className="text-black mb-4 leading-relaxed">
    La base légale du traitement repose sur : votre consentement (notamment pour l’inscription à la newsletter et la réception de communications commerciales), l’exécution de mesures précontractuelles ou contractuelles (traitement des demandes et élaboration des devis), ainsi que l’intérêt légitime de CHAPOZ (amélioration du site, suivi de la relation avec les clients et prospects).
  </p>
  <p className="text-black leading-relaxed">
    Pour exercer vos droits ou pour toute question relative au traitement de vos données personnelles, vous pouvez nous contacter à l'adresse électronique <span className="font-semibold">hello@gogogo-studio.fr</span> ou par courrier postal à l'adresse du siège social indiquée ci-dessus. Vous disposez également du droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL).
  </p>
</div>


            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">5. Cookies et technologies similaires</h2>
              <p className="text-black mb-4 leading-relaxed">
                Ce site utilise des cookies et des technologies similaires pour améliorer votre expérience de navigation, personnaliser les contenus et les publicités, fournir des fonctionnalités relatives aux réseaux sociaux et analyser le trafic du site. Les cookies sont de petits fichiers texte stockés sur votre terminal lors de votre visite sur le site.
              </p>
              <p className="text-black leading-relaxed">
                Vous pouvez à tout moment modifier vos préférences en matière de cookies en configurant les paramètres de votre navigateur internet. Toutefois, le refus de certains cookies peut entraîner une limitation des fonctionnalités du site et une altération de votre expérience de navigation. Pour plus d'informations sur les cookies et leur gestion, vous pouvez consulter le site de la CNIL.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">6. Responsabilité et garanties</h2>
              <p className="text-black mb-4 leading-relaxed">
                CHAPOZ s'efforce d'assurer au mieux de ses possibilités l'exactitude, la fiabilité et la mise à jour régulière des informations diffusées sur ce site. Toutefois, CHAPOZ ne peut garantir l'exactitude, la précision, l'exhaustivité ou l'actualité des informations mises à disposition sur ce site, qu'elles émanent de CHAPOZ elle-même ou de tiers partenaires.
              </p>
              <p className="text-black mb-4 leading-relaxed">
                En conséquence, CHAPOZ décline toute responsabilité en cas d'erreur, d'inexactitude ou d'omission dans les informations présentées sur le site, ainsi que pour tout dommage direct ou indirect résultant de l'utilisation du site ou de l'impossibilité d'y accéder. CHAPOZ ne saurait être tenue responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au site et résultant de l'apparition d'un bug, d'une incompatibilité, d'un virus ou de tout autre problème technique.
              </p>
              <p className="text-black leading-relaxed">
                CHAPOZ se réserve le droit de modifier, suspendre ou interrompre à tout moment, de manière temporaire ou définitive, tout ou partie du site, sans préavis et sans que sa responsabilité puisse être engagée de ce fait. L'utilisateur reconnaît utiliser le site sous sa seule responsabilité.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">7. Liens hypertextes</h2>
              <p className="text-black mb-4 leading-relaxed">
                Le site peut contenir des liens hypertextes pointant vers d'autres sites internet ou d'autres sources externes. Ces liens sont fournis uniquement pour la commodité de l'utilisateur et ne constituent en aucun cas une validation ou une approbation du contenu de ces sites externes par CHAPOZ.
              </p>
              <p className="text-black leading-relaxed">
                CHAPOZ ne saurait être tenue responsable du contenu, des produits, des services ou de tout autre élément présent sur ces sites tiers, ni des dommages ou pertes avérés ou allégués consécutifs ou en relation avec l'utilisation ou le fait d'avoir fait confiance au contenu, à des biens ou des services disponibles sur ces sites externes. Il appartient à l'utilisateur de prendre les précautions nécessaires pour s'assurer que les sites qu'il consulte sont exempts de tout élément de nature destructrice.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">8. Droit applicable et juridiction compétente</h2>
              <p className="text-black mb-4 leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. Elles ont été rédigées en langue française, laquelle fait foi en cas de traduction dans une autre langue. L'utilisation du site implique l'acceptation pleine et entière des présentes mentions légales.
              </p>
              <p className="text-black leading-relaxed">
                En cas de litige relatif à l'interprétation, l'exécution ou la validité des présentes mentions légales ou plus généralement relatif à l'utilisation du site, les parties s'efforceront de résoudre leur différend à l'amiable. À défaut d'accord amiable dans un délai de trente jours à compter de la notification du litige par l'une des parties, les tribunaux français seront seuls compétents pour connaître du litige, nonobstant pluralité de défendeurs ou appel en garantie.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">9. Contact</h2>
              <p className="text-black mb-4 leading-relaxed">
                Pour toute question, demande d'information ou réclamation relative aux présentes mentions légales, à l'utilisation du site ou au traitement de vos données personnelles, vous pouvez nous contacter par les moyens suivants :
              </p>
              <p className="text-black mb-2 leading-relaxed">
                Par courrier électronique à l'adresse : hello@gogogo-studio.fr
              </p>
              <p className="text-black mb-2 leading-relaxed">
                Par téléphone au numéro : 06 91 24 23 68
              </p>
              <p className="text-black leading-relaxed">
                Par courrier postal à l'adresse du siège social : 97118 SAINT-FRANÇOIS
              </p>
            </div>

            <div className="pt-8 border-t border-black">
              <p className="text-center text-black">
                Dernière mise à jour des mentions légales : 1er septembre 2025
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalNotices;
