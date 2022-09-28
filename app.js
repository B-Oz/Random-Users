const button = document.querySelector(".btn");
const card = document.querySelector(".card");

button.addEventListener("click", () => {
  const getPersonData = async () => {
    try {
      const url = "https://randomuser.me/api/?results=100";
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
    } catch (error) {
      alert(error);
    }
  };

  getPersonData();
});
