import { useEffect, useRef, useState } from "react";
import "./Contact.css";
import AnimatedLetters from "../../AnimatedLetters";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import emailjs from "@emailjs/browser";
import "leaflet/dist/leaflet.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();
  const [t] = useTranslation();

  const errorMessage = t("contact.error.message");
  const exitMessage = t("contact.exit.message");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SEND_EMAIL_SERVICE_ID,
        import.meta.env.VITE_SEND_EMAIL_TEMPLATE,
        refForm.current,
        import.meta.env.VITE_SEND_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          alert(exitMessage);
          window.location = "/contact";
        },
        (error) => {
          alert(errorMessage, error);
        }
      );
  };
  /*   useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover2");
    }, 3000);
  }, []); */

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="template__container">
      <div>
        <div>
          <span className="w-1/2 mr-2 tags">&lt;h1&gt;</span>
          <h1 className="text-3xl sm:text-4xl">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={t("contact.title")}
              idx={7}
            />
            <span className="ml-2 tags">&lt;/h1&gt;</span>
          </h1>
          <p>{t("contact.description1")}</p>
        </div>
        <div>
          <form
            ref={refForm}
            onSubmit={sendEmail}
            className="contact-form half"
          >
            <div className="flex gap-4">
              <div className="w-1/2">
                <input
                  className="w-full"
                  type="text"
                  name="name"
                  placeholder={t("contact.input.name")}
                  required
                />
              </div>
              <div className="w-1/2">
                <input
                  className="w-full"
                  type="email"
                  name="email"
                  placeholder={t("contact.input.email")}
                  required
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder={t("contact.input.subject")}
                name="subject"
                required
                className="w-full"
              />
            </div>
            <div>
              <textarea
                className="w-full"
                name="message"
                placeholder={t("contact.input.message")}
                required
              ></textarea>
            </div>
            <button className="w-2/6 ml-auto text-white">
              {t("contact.button")}
            </button>
          </form>
        </div>
      </div>
      <div className="bg-red-500 h-80 mapa">
        <MapContainer center={[-18.4927767, -70.2890929]} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[-18.4927767, -70.2890929]} zoom={13}>
            <Popup>{t("contact.popup.message")}</Popup>
          </Marker>
          <div className="info-map">
            <span>Williams Hernández</span>
            <span>Arica - Chile</span>
            <span className="email_map">hernandw@gmail.com</span>
          </div>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contact;
