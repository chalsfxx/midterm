const sendForm = (preventForm) => {
  preventForm.preventDefault();

  let name = document.querySelector("#name").value;

  let email = document.querySelector("#email").value;

  let phone = document.querySelector("#phone").value;

  let message = document.querySelector("#message").value;



  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",

    body: JSON.stringify({
      title: name,

      body: `${email} ${phone} ${message}`,

      userId: 1,
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (response.status === 201) {

        document.querySelector(".alert").style.display = "block";

        setTimeout(
          () => (document.querySelector(".alert").style.display = "none"),
          6000
        );
      } else {
        document.querySelector(".alert-wrong").style.display = "block";

        setTimeout(
          () => (document.querySelector(".alert-wrong").style.display = "none"),
          6000
        );
      }

      return response.json();
    })

    .then((json) => console.log(json));
};

document.querySelector("#contact-form").addEventListener("submit", sendForm);