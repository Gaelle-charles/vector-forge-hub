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
