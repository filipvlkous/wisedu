import emailjs from "@emailjs/browser";

function sendEmail({ form, e }) {
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
}
export default sendEmail;
