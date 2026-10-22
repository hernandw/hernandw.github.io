import { GrMailOption } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";
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

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert(t('contact.successAlert'));
        },
        (error) => {
          console.log(error.text);
          alert(t('contact.errorAlert'));
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:pl-28 md:pr-10 pt-16 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="md:w-2/5 px-4 pt-8">
        <h1 className="text-3xl font-bold">{t('contact.title1')}</h1>
        <p className="text-3xl font-bold">{t('contact.title2')}</p>
        <div className="flex flex-col">
          <p className="py-2 text-sm text-gray-600 dark:text-gray-300">{t('contact.subtitle')}</p>
          
          <div className="flex gap-4 items-center">
            <p className="text-[#dfa400] py-2 text-xl"><FaMapMarkerAlt /></p>
            <p className="py-2 font-bold">Arica - Chile</p>
          </div>
          
          <div className="flex gap-4 items-center">
            <p className="text-[#dfa400] py-2 text-xl"><GrMailOption /></p>
            <p className="py-2 font-bold">hernandw@gmail.com</p>
          </div>

          {/* Contenedor de tu Mapa Personalizado */}
          <div className="mt-6 rounded-xl overflow-hidden border-2 border-[#dfa400] shadow-md w-full h-[400px]">
            <iframe
              title="Arica Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15135.472692366611!2d-70.27654795!3d-18.489629549999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scl!4v1792668584392!5m2!1sen!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="md:w-3/5 px-2 pt-10">
        <div>
          <h2 className="text-xl font-bold md:px-8 mb-4">{t('contact.saySomething')}</h2>
          <div>
            <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-2 md:p-8">
              <div className="flex gap-4 md:gap-12">
                <input type="text" placeholder={t('contact.namePlaceholder')} className="w-full p-2 mt-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700" name="user_name" required />
                <input type="email" placeholder={t('contact.emailPlaceholder')} className="w-full p-2 mt-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700" name="user_email" required />
              </div>
              <div>
                <input type="text" placeholder={t('contact.subjectPlaceholder')} className="w-full p-2 mt-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700" name="user_subject" required />
              </div>
              <div>
                <textarea placeholder={t('contact.messagePlaceholder')} className="w-full p-2 mt-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700" name="message" rows="4" required />
              </div>
              <button className="bg-[#dfa400] text-white font-bold p-2 rounded-lg w-full md:w-[300px] mt-2 uppercase hover:bg-gray-200 dark:hover:bg-white hover:text-[#dfa400] transition-colors">
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