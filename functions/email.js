import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const sendEmail = async (formData) => {
  try {
    const templateParams = {
      user_name: formData.user_name,
      telefone: formData.telefone,
      user_email: formData.user_email,
      message: formData.message,
    };
    
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    );

    console.log('Email enviado com sucesso:', response);
  } catch (error) {
    console.error('Erro ao enviar o email:', error);
  }
};

export default sendEmail;
