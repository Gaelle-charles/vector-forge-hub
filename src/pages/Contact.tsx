import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import AnimatedBackground from '@/components/AnimatedBackground';
import { 
  Mail, Phone, MapPin, Clock, Send, Zap, MessageSquare, 
  Calendar, Linkedin, Twitter, Github 
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.firstName || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: '',
      newsletter: false
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "contact@aiagency.fr",
      action: "mailto:contact@aiagency.fr"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Téléphone",
      content: "+33 1 23 45 67 89",
      action: "tel:+33123456789"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adresse",
      content: "123 Avenue de l'Innovation\n75001 Paris, France",
      action: null
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horaires",
      content: "Lun-Ven: 9h-18h\nSam: 10h-16h",
      action: null
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, url: "#", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, url: "#", label: "Twitter" },
    { icon: <Github className="h-5 w-5" />, url: "#", label: "GitHub" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-section py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-deep-black">
            Contactez-Nous
          </h1>
          <p className="text-xl text-deep-black/80 max-w-3xl mx-auto">
            Prêt à transformer votre entreprise avec l'IA ? Parlons de votre projet !
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="ai-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="mr-2 h-6 w-6 text-primary" />
                  Démarrons Votre Projet
                </CardTitle>
                <CardDescription>
                  Remplissez ce formulaire pour obtenir un devis personnalisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Entreprise</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Service souhaité</Label>
                      <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisissez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="applications">Applications Web & Mobile</SelectItem>
                          <SelectItem value="video">Création Vidéo & Images IA</SelectItem>
                          <SelectItem value="agents">Agents IA Personnalisés</SelectItem>
                          <SelectItem value="formation">Formation IA</SelectItem>
                          <SelectItem value="conseil">Conseil & Stratégie</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Budget estimé</Label>
                      <Select onValueChange={(value) => setFormData({...formData, budget: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Fourchette budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5k-15k">5 000€ - 15 000€</SelectItem>
                          <SelectItem value="15k-30k">15 000€ - 30 000€</SelectItem>
                          <SelectItem value="30k-50k">30 000€ - 50 000€</SelectItem>
                          <SelectItem value="50k+">Plus de 50 000€</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Décrivez votre projet, vos objectifs et vos contraintes..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => setFormData({...formData, newsletter: checked as boolean})}
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      J'accepte de recevoir les actualités et offres spéciales
                    </Label>
                  </div>

                  <Button type="submit" className="ai-button-primary w-full text-lg">
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer ma demande
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="ai-card-magenta">
                <CardHeader>
                  <CardTitle className="text-2xl text-pure-white">
                    Informations de Contact
                  </CardTitle>
                  <CardDescription className="text-pure-white/80">
                    Plusieurs moyens de nous joindre
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-3 bg-pure-white/20 rounded-xl text-pure-white">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-pure-white mb-1">{info.title}</h3>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-pure-white/80 hover:text-pure-white transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-pure-white/80 whitespace-pre-line">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="ai-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    Actions Rapides
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Planifier un appel
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Zap className="mr-2 h-4 w-4" />
                    Consultation express (15min)
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Télécharger notre brochure
                  </Button>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="ai-card text-center">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Suivez-nous</h3>
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="p-3 bg-primary/10 rounded-xl text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 neon-text">
            Questions Fréquentes
          </h2>
          <div className="grid gap-6">
            {[
              {
                q: "Quel est le délai moyen pour un projet ?",
                a: "Selon la complexité : 2-4 semaines pour les formations, 4-8 semaines pour les agents IA, 6-12 semaines pour les applications complètes."
              },
              {
                q: "Proposez-vous un support après livraison ?",
                a: "Oui, tous nos projets incluent 6 mois de support gratuit, puis nous proposons des contrats de maintenance personnalisés."
              },
              {
                q: "Travaillez-vous avec des startups ?",
                a: "Absolument ! Nous avons des tarifs préférentiels pour les startups et proposons même des partenariats equity dans certains cas."
              }
            ].map((faq, index) => (
              <Card key={index} className="ai-card">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 text-primary">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;