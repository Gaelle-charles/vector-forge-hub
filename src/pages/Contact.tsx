import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Send, MessageSquare, Calendar, Clock, User, Zap
} from 'lucide-react';

const Contact = () => {
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

  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    subject: ''
  });

  const handleSubmit = () => {
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    alert("Message envoyé ! Nous vous répondrons dans les plus brefs délais.");
    
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

  const handleAppointmentSubmit = () => {
    if (!appointmentData.name || !appointmentData.email || !appointmentData.date || !appointmentData.time) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    alert("Rendez-vous programmé ! Nous vous enverrons une confirmation par email.");
    
    setAppointmentData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      subject: ''
    });
  };

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            Contactez-<span className="text-orange-500">Nous</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à transformer votre entreprise ? Parlons de votre projet !
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-4 border-black bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center text-black">
                  <MessageSquare className="mr-2 h-6 w-6 text-orange-500" />
                  Démarrons Votre Projet
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Remplissez ce formulaire pour obtenir un devis personnalisé
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-black font-medium">Prénom *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        required
                        className="border-2 border-black focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-black font-medium">Nom</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="border-2 border-black focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-black font-medium">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="border-2 border-black focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-black font-medium">Téléphone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="border-2 border-black focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-black font-medium">Entreprise</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Nom de votre entreprise"
                      className="border-2 border-black focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-black font-medium">Service souhaité</Label>
                      <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                        <SelectTrigger className="border-2 border-black focus:ring-2 focus:ring-orange-500">
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
                      <Label className="text-black font-medium">Budget estimé</Label>
                      <Select onValueChange={(value) => setFormData({...formData, budget: value})}>
                        <SelectTrigger className="border-2 border-black focus:ring-2 focus:ring-orange-500">
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
                    <Label htmlFor="message" className="text-black font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Décrivez votre projet, vos objectifs et vos contraintes..."
                      rows={5}
                      required
                      className="border-2 border-black focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => setFormData({...formData, newsletter: checked as boolean})}
                      className="border-2 border-black"
                    />
                    <Label htmlFor="newsletter" className="text-sm text-gray-600">
                      J'accepte de recevoir les actualités et offres spéciales
                    </Label>
                  </div>

                  <Button 
                    onClick={handleSubmit}
                    className="w-full text-lg bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer ma demande
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Appointment Booking */}
            <Card className="border-4 border-black bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center text-black">
                  <Calendar className="mr-2 h-6 w-6 text-orange-500" />
                  Réserver un Rendez-vous
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Programmez un appel de 30 minutes pour discuter de votre projet
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="appointmentName" className="text-black font-medium">Nom complet *</Label>
                    <Input
                      id="appointmentName"
                      value={appointmentData.name}
                      onChange={(e) => setAppointmentData({...appointmentData, name: e.target.value})}
                      required
                      className="border-2 border-black focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="appointmentEmail" className="text-black font-medium">Email *</Label>
                      <Input
                        id="appointmentEmail"
                        type="email"
                        value={appointmentData.email}
                        onChange={(e) => setAppointmentData({...appointmentData, email: e.target.value})}
                        required
                        className="border-2 border-black focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="appointmentPhone" className="text-black font-medium">Téléphone</Label>
                      <Input
                        id="appointmentPhone"
                        type="tel"
                        value={appointmentData.phone}
                        onChange={(e) => setAppointmentData({...appointmentData, phone: e.target.value})}
                        className="border-2 border-black focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="appointmentDate" className="text-black font-medium">Date *</Label>
                      <Input
                        id="appointmentDate"
                        type="date"
                        value={appointmentData.date}
                        onChange={(e) => setAppointmentData({...appointmentData, date: e.target.value})}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="border-2 border-black focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <Label className="text-black font-medium">Heure *</Label>
                      <Select onValueChange={(value) => setAppointmentData({...appointmentData, time: value})}>
                        <SelectTrigger className="border-2 border-black focus:ring-2 focus:ring-orange-500">
                          <SelectValue placeholder="Choisissez une heure" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="appointmentSubject" className="text-black font-medium">Sujet de discussion</Label>
                    <Input
                      id="appointmentSubject"
                      value={appointmentData.subject}
                      onChange={(e) => setAppointmentData({...appointmentData, subject: e.target.value})}
                      placeholder="Ex: Développement d'une application mobile"
                      className="border-2 border-black focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">Durée: 30 minutes</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                      <User className="h-4 w-4" />
                      <span>Consultation gratuite via visioconférence</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleAppointmentSubmit}
                    className="w-full text-lg bg-orange-500 text-white border-2 border-orange-500 hover:bg-white hover:text-orange-500 transition-colors duration-300"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Réserver mon créneau
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-black">
            Actions <span className="text-orange-500">Rapides</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button className="p-6 h-auto bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors duration-300">
              <div className="text-center">
                <Zap className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold">Consultation Express</div>
                <div className="text-sm opacity-80">15 min gratuit</div>
              </div>
            </Button>
            <Button className="p-6 h-auto bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors duration-300">
              <div className="text-center">
                <MessageSquare className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold">Chat en Direct</div>
                <div className="text-sm opacity-80">Réponse immédiate</div>
              </div>
            </Button>
            <Button className="p-6 h-auto bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors duration-300">
              <div className="text-center">
                <Send className="h-8 w-8 mx-auto mb-2" />
                <div className="font-semibold">Devis Rapide</div>
                <div className="text-sm opacity-80">Sous 24h</div>
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">
            Questions <span className="text-orange-500">Fréquentes</span>
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
              },
              {
                q: "Comment se déroule un rendez-vous de 30 minutes ?",
                a: "Nous analysons votre projet, définissons vos besoins, proposons une approche technique et vous remettons une estimation budgétaire préliminaire."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-2 border-black bg-white">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 text-orange-500">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
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
