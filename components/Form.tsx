import { useState } from 'react';
import { useLanguage } from '../context/lenguageProvider';
import translate from "../translate.json";
import { Button } from "../components/ui/button";
import Image from "next/image";
import styles from "../styles/form.module.css";

const Form = () => {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    };

    // Validate first name
    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'First name is required.';
    } else if (/\d/.test(formData.firstName)) {
      newErrors.firstName = 'First name should not contain numbers.';
    } else if (/\s/.test(formData.firstName)) {
      newErrors.firstName = 'First name should not contain spaces.';
    }

    // Validate last name
    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'Last name is required.';
    } else if (/\d/.test(formData.lastName)) {
      newErrors.lastName = 'Last name should not contain numbers.';
    } else if (/\s/.test(formData.lastName)) {
      newErrors.lastName = 'Last name should not contain spaces.';
    }

    // Validate email
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }

    // Validate phone number
    if (formData.phone.trim() === '') {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be at least 8 digits.';
    }

    // Validate message
    const wordCount = formData.message.split(/\s+/).length;
    if (wordCount > 200) {
      newErrors.message = 'Message should not exceed 200 words.';
    } else if (formData.message.trim() === '') {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:3000/api/message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        alert('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } catch (error) {
        console.error(error);
        alert('Failed to send message');
      }
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  return (
    <div className="pt-8 flex flex-col items-center bg-gradient-to-r from-bg-slate-800 via-bg-slate-900 md:flex-row">
      <div className="h-full w-10/12 md:w-10/12 flex flex-col items-center">
        <form
          className="grid gap-2 grid-cols-1 grid-row-5 md:w-10/12"
          onSubmit={handleSubmit}
        >
          <div>
            <h6 className="text-left text-3xl">{translate[language].form.title}</h6>
            <span className="text-lg">
              {translate[language].form.description}
            </span>
          </div>
          <div className="grid gap-1 grid-cols-2 row-span-1">
            <input
              className={`rounded-md bg-slate-900 p-1.5 text-white ${errors.firstName ? 'border-red-500 border-2' : ''}`}
              placeholder={translate[language].form.fields.firstName}
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              className={`rounded-md bg-slate-900 p-1.5 text-white ${errors.lastName ? 'border-red-500 border-2' : ''}`}
              placeholder={translate[language].form.fields.lastName}
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <input
            className={`rounded-md bg-slate-900 p-1.5 text-white ${errors.email ? 'border-red-500 border-2' : ''}`}
            type="email"
            placeholder={translate[language].form.fields.email}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className={`rounded-md bg-slate-900 p-1.5 text-white ${errors.phone ? 'border-red-500 border-2' : ''}`}
            type="number"
            placeholder={translate[language].form.fields.phoneNumber}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            className={`rounded-md bg-slate-900 p-1.5 text-white ${errors.message ? 'border-red-500 border-2' : ''}`}
            placeholder={translate[language].form.fields.message}
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
          />
          <Button className="bg-teal-950 text-white dark:hover:text-black">
            {translate[language].form.button}
          </Button>
        </form>
      </div>
      <div className="w-9/12 flex items-center justify-center mt-8 md:p-12">
        <div className={language === "en" ? styles.imageContainer : styles.imageContainer2} style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            className={`${styles['image']} rounded-xl`}
            src="/astro.jpg"
            width={700}
            height={700}
            alt="foto astronauta"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
