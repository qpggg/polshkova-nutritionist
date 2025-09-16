import React from 'react';
import ContactHero from '../components/sections/contacts/ContactHero';
import ContactForm from '../components/sections/contacts/ContactForm';
import ContactInfo from '../components/sections/contacts/ContactInfo';

const Contacts: React.FC = () => {
  return (
    <div className="contacts-page">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </div>
  );
};

export default Contacts;
