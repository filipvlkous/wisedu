import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Pro koho je doučování vhodné?",
    answer:
      "Doučování je primárně zaměřeno na studenty středních škol. Ovšem pokud jseš na vysoké škole a nevíš si rady se základy, můžeme ti také poradit. Každopádně doučování na vysokoškolské úrovni zatím nenabízíme.",
  },
  {
    question: "Kde by probíhalo prezenční doučování?",
    answer:
      "Doučování probíhá primárně na území hlavního města Prahy. Prezenční doučování mimo Prahu by bylo zpoplatněno. Pokud máte zájem o doučování a nejste z Prahy, vždy doporučuji upřednostnit on-line doučování ",
  },
  {
    question: "Co probereme na první konzultaci?",
    answer:
      "První konzultaci nabízíme zdarma. Dohodneme se co od doučování očekávate. Jak často bychom se scházeli. Zda by bylo doučování pravidelné, či nikoliv. Dohodneme se kde by doučování probíhalo a na dalších podrobnostech. Ještě nic nebude závazné, tudíž se můžete rozhodnout, zda chcete na doučování či nikoliv.",
  },
  {
    question:
      "Co když se rozhodneš, že již nepotřebuješ doučování a máš předplacené lekce? 💡",
    answer:
      "I to se může stát. V tom případě ti vrátím zbytek peněz za lekce, které si nevyužil/a. Avšak jako storno poplatek ti ztrhnu 15% z částky, kterou ti mám vrátit.",
  },
  {
    question: "Co mám dělat, když máme domluvenou lekci, ale nemohu dorazit?",
    answer: `Vždy se můžeme dohodnout na jiném termínu. Jen se stačí včas ozvat. Zde mám připravené storno podmínky: ENTER
     Zrušíte lekci 24h předem - 100% vrácení peněz (lekce vám zůstane) ENTER Zrušíte lekci méně než 24h předem - 50% vrácení peněz ENTER Zrušíte lekci méně než 12 hodin předem - lekce vám propadá`,
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
