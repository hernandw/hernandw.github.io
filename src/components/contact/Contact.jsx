import { GrMapLocation, GrMailOption } from "react-icons/gr";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../../context/LanguageContext";

const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

const Contact = () => {
  const { t } = useLanguage();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validamos que las credenciales existan antes de enviar
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("Faltan las credenciales de EmailJS en las variables de entorno (.env)");
      alert("Error de configuración: Faltan credenciales de correo.");
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          form.current.reset();
          alert(t('contact.successAlert'));
        },
        (error) => {
          console.error("FAILED...", error);
          alert(`${t('contact.errorAlert')} (${error.text || "Ver consola para detalles"})`);
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:pl-28 md:pr-10 pt-16">
      <div className="md:w-2/5 px-4 pt-8">
        <h1 className="text-3xl font-bold">{t('contact.title1')}</h1>
        <p className="text-3xl font-bold">{t('contact.title2')}</p>
        <div className="flex flex-col">
          <p className="py-2 text-sm">{t('contact.subtitle')}</p>
          <div className="flex gap-4 items-center">
            <p className="text-[#dfa400] py-2"><GrMapLocation /></p>
            <p className="text-white py-2 font-bold">Arica - Chile</p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="text-[#dfa400] py-2"><GrMailOption /></p>
            <p className="text-white py-2 font-bold">hernandw@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="md:w-3/5 px-2 pt-10">
        <div>
          <h2 className="text-xl font-bold md:px-8 mb-4">{t('contact.saySomething')}</h2>
          <div>
            <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-2 md:p-8">
              <div className="flex gap-4 md:gap-12">
                <input type="text" placeholder={t('contact.namePlaceholder')} className="w-full p-2 mt-2 rounded-lg text-black" name="user_name" required />
                <input type="email" placeholder={t('contact.emailPlaceholder')} className="w-full p-2 mt-2 rounded-lg text-black" name="user_email" required />
              </div>
              <div>
                <input type="text" placeholder={t('contact.subjectPlaceholder')} className="w-full p-2 mt-2 rounded-lg text-black" name="user_subject" required />
              </div>
              <div>
                <textarea placeholder={t('contact.messagePlaceholder')} className="w-full p-2 mt-2 rounded-lg text-black" name="message" rows="4" required />
              </div>
              <button className="bg-[#dfa400] text-white font-bold p-2 rounded-lg w-full md:w-[300px] mt-2 uppercase hover:bg-white hover:text-[#dfa400]">
                {t('contact.sendButton')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Contact;
