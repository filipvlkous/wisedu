import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./modal";

export default function Example() {
  const [show, setShow] = useState(false);
  const form = useRef();

  function sendEmail(e) {
    setShow(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "WisdomEdu_service",
        "template_mnils8e",
        form.current,
        "user_bwXhZ3P0vFP8RTBjZA0qJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();

    setTimeout(() => {
      setShow(false);
    }, 3000);
  }
  return (
    <div className="relative bg-white font-Bitter transition-all duration-300 pt-12">
      <div className="absolute inset-0 ">
        <div className="absolute inset-y-0 left-0 w-1/2" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className=" py-2 lg:py-2 px-4 sm:px-6 lg:col-span-2 lg:px-8  xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              Napište nám.
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Rádi Vám zodpovíme veškeré vaše dotazy nebo se chcete jen dozvědět
              více o
              <span className=" text-primary font-extrabold">
                {" "}
                Wisdom Education
              </span>
              ? Neváhejte nás kontaktovat.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              {/* <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex">
                  <PhoneIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">+420 773 234 540</span>
                </dd>
              </div> */}
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EnvelopeIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">ucetnictvisnikol@gmail.com</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className=" relative py-2 px-4 sm:px-6 lg:col-span-3 lg:py-2 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form
              ref={form}
              onSubmit={sendEmail}
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-y-6 "
            >
              {/* {show ? (
                <div className="absolute left-[50%] top-[50%] -translate-y-1/2 -translate-x-1/2 text-center ">
                  <Modal show={() => setShow(false)} />
                </div>
              ) : null} */}
              <motion.div
                variants={itemVariants}
                initial={false}
                animate={show ? "open" : "closed"}
                className="absolute left-1/3 top-1/3  text-center "
              >
                <Modal show={() => setShow(false)} />
              </motion.div>

              <div>
                <label htmlFor="full-name" className="sr-only">
                  Full-name
                </label>

                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full shadow-lg py-3 px-4 placeholder-gray-500 border-primary focus:border-primary border-2 rounded-md focus:ml-2 transition-all duration-250"
                  placeholder="Celé jméno"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-lg py-3 px-4 placeholder-gray-500 border-primary focus:border-primary border-2 rounded-md focus:ml-2 transition-all duration-250"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  pattern={"[0-9]{3}[0-9]{3}[0-9]{3}"}
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-lg py-3 px-4 placeholder-gray-500 border-primary focus:border-primary border-2 rounded-md focus:ml-2 transition-all duration-250"
                  placeholder="Telefon"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  minLength={5}
                  id="message"
                  name="message"
                  rows={5}
                  className="block w-full shadow-lg py-3 px-4 placeholder-gray-500 border-primary focus:border-primary border-2 rounded-md focus:ml-2 transition-all duration-250"
                  placeholder="Zpráva"
                  defaultValue={""}
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className=" w-2/6 inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Odeslat
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    visibility: "visible",
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2 },
    visibility: "hidden",
  },
};
