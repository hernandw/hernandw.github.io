import { GrMapLocation, GrMailOption } from "react-icons/gr";
import { useRef } from "react";

import emailjs from "@emailjs/browser";



const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY


const Contact = () => {

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending Email


    emailjs
      .sendForm(
        SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Something went wrong!')

        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:pl-28 md:pr-10  pt-16">
      <div className="md:w-2/5 px-4 pt-8">
        <h1 className="text-3xl font-bold">What’s your story?</h1>
        <p className="text-3xl font-bold">Get in touch.</p>
        <div className="flex flex-col ">
          <p className="py-2 text-sm">Always available for freelancing if the right project comes along, Feel free to contact me.</p>
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
          <h2 className="text-xl font-bold md:px-8 mb-4">Say Something</h2>
          <div>
            <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-2 md:p-8">
              <div className="flex gap-4 md:gap-12">
                <input type="text" placeholder="Name" className="w-full p-2 mt-2 rounded-lg text-black" name="user_name" />
                <input type="email" placeholder="Email" className="w-full p-2 mt-2 rounded-lg text-black" name="user_email" />
              </div>
              <div>
                <input type="text" placeholder="Subject" className="w-full p-2 mt-2 rounded-lg text-black" name="user_subject" />
              </div>
              <div>
                <textarea placeholder="Message" className="w-full p-2 mt-2 rounded-lg text-black" name="message" />
              </div>
              <button className="bg-[#dfa400] text-white font-bold p-2 rounded-lg w-full md:w-[300px] mt-2 uppercase hover:bg-white hover:text-[#dfa400]">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact