import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
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
      content: "contact@gogogo-studio.fr",
      action: "mailto:contact@gogogo-studio.fr"
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
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Contactez-<span className="orange-text">Nous</span>
          </h1>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Prêt à transformer votre entreprise ? Parlons de votre projet !
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="modern-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center text-foreground">
                  <MessageSquare className="mr-2 h-6 w-6 text-primary" />
                  Démarrons Votre Projet
                </CardTitle>
                <CardDescription className="text-medium-gray">
                  Remplissez ce formulaire pour obtenir un devis personnalisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-foreground">Prénom *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        required
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-foreground">Nom</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="border-border focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground">Téléphone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="border-border focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-foreground">Entreprise</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Nom de votre entreprise"
                      className="border-border focus:ring-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-foreground">Service souhaité</Label>
                      <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                        <SelectTrigger className="border-border">
                          <SelectValue placeholder="Choisissez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="applications">Applications Web & Mobile</SelectItem>
                          <SelectItem value="design">Design & UX/UI</SelectItem>
                          <SelectItem value="backend">Développement Backend</SelectItem>
                          <SelectItem value="conseil">Conseil & Stratégie</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-foreground">Budget estimé</Label>
                      <Select onValueChange={(value) => setFormData({...formData, budget: value})}>
                        <SelectTrigger className="border-border">
                          <SelectValue placeholder="Fourchette budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2k-5k">2 000€ - 5 000€</SelectItem>
                          <SelectItem value="5k-15k">5 000€ - 15 000€</SelectItem>
                          <SelectItem value="15k-30k">15 000€ - 30 000€</SelectItem>
                          <SelectItem value="30k+">Plus de 30 000€</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Décrivez votre projet, vos objectifs et vos contraintes..."
                      rows={5}
                      required
                      className="border-border focus:ring-primary"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => setFormData({...formData, newsletter: checked as boolean})}
                    />
                    <Label htmlFor="newsletter" className="text-sm text-medium-gray">
                      J'accepte de recevoir les actualités et offres spéciales
                    </Label>
                  </div>

                  <Button type="submit" className="modern-button-primary w-full text-lg">
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer ma demande
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Fun Booking Section */}
            <div className="space-y-8">
              <Card className="modern-card-accent text-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                <CardHeader className="relative z-10">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl text-foreground mb-2">
                    🚀 Prêt pour le décollage ?
                  </CardTitle>
                  <CardDescription className="text-lg text-medium-gray">
                    30 minutes qui pourraient changer votre business !
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      ☕ Café virtuel & brainstorming
                    </h3>
                    <ul className="text-left space-y-2 text-medium-gray">
                      <li className="flex items-center">
                        <Zap className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        Analyse express de votre projet
                      </li>
                      <li className="flex items-center">
                        <Zap className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        Conseils personnalisés gratuits
                      </li>
                      <li className="flex items-center">
                        <Zap className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        Roadmap de développement
                      </li>
                      <li className="flex items-center">
                        <Zap className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        Estimation budgétaire réaliste
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <Button className="w-full modern-button-primary text-lg py-4 group">
                      <Calendar className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                      Réserver mon créneau gratuit 🎯
                    </Button>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <Button className="modern-button-secondary group">
                        <MessageSquare className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                        Chat live
                      </Button>
                      <Button className="modern-button-secondary group">
                        <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                        Email express
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-sm text-medium-gray bg-secondary/30 rounded-xl p-4">
                    <strong className="text-foreground">🎁 Bonus :</strong> Une checklist IA personnalisée 
                    pour votre secteur d'activité !
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="modern-card text-center">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4 text-foreground">Rejoignez notre communauté</h3>
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="p-3 bg-primary/10 rounded-xl text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
                        aria-label={social.label}
                      >
                        <div className="group-hover:animate-pulse">
                          {social.icon}
                        </div>
                      </a>
                    ))}
                  </div>
                  <p className="text-xs text-medium-gray mt-3">
                    Suivez nos dernières innovations IA
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Questions <span className="orange-text">Fréquentes</span>
          </h2>
          <div className="grid gap-6">
            {[
              {
                q: "Quel est le délai moyen pour un projet ?",
                a: "Selon la complexité : 2-4 semaines pour les sites vitrine, 4-8 semaines pour les applications, 6-12 semaines pour les plateformes complètes."
              },
              {
                q: "Proposez-vous un support après livraison ?",
                a: "Oui, tous nos projets incluent 3 mois de support gratuit, puis nous proposons des contrats de maintenance personnalisés."
              },
              {
                q: "Travaillez-vous avec des startups ?",
                a: "Absolument ! Nous avons des tarifs adaptés pour les startups et proposons même des partenariats dans certains cas."
              }
            ].map((faq, index) => (
              <Card key={index} className="modern-card">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 text-primary">{faq.q}</h3>
                  <p className="text-medium-gray">{faq.a}</p>
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