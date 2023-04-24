document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("submit", event);

    const data = {
      firstname: document.querySelector("#firstname").value,
      lastname: document.querySelector("#lastname").value,
      email: document.querySelector("#email").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value,
    };

    console.log(data);

    const response = await axios.post(
      "https://site--formulaire-back--4w9wbptccl4w.code.run/form",
      data
    );
    console.log(response.data);
  });
});
