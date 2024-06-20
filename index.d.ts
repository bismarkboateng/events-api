interface Consultation {
    personal_information: {
      fullName: string;
      gender: string;
      dob: Date;
      phoneNumber: string;
      address: string;
      email?: string;
    };
    date: Date;
    consultation_type: string;
    healthcare_provider: string;
    medical_history: {
      past_medical_conditions?: string;
      current_medications?: string;
      allergies?: string;
    };
    patient_problem: {
      medical_condition?: string;
      duration_of_symptoms: string;
      nature_of_symptoms: string;
    };
    lifestyle: {
      sleep_patterns: string;
    };
  };