const handleSubmit = () => {
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
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Rendez-vous programmé !",
      description: "Nous vous enverrons une confirmation par email.",
    });
    
    setAppointmentData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      subject: ''
    });
  };
