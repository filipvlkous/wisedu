import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "Jak se dostanu na místoo?",
    answer:
      "Po zakoupení zážitku Vám bude zaslán email s informacemi a s mapou jak se na místo dostanete.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="max-w-7xl font-Bitter mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:px-8 transition-all duration-200 transform  ">
      <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Často kladené otázky:
        </h2>
        <dl className="mt-6 space-y-6 divide-y divide-gray-200 ">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-0" : "-rotate-180",
                            "h-6 w-6 transform transition duration-300 text-primary"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Transition
                    enter="transition ease duration-300 transform"
                    enterFrom="opacity-0 -translate-y-full"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease duration-300 transform"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-full"
                  >
                    <Disclosure.Panel static as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500 ">{faq.answer}</p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}
