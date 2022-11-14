const members = [
  {
    name: "Bamidele Damilola Joseph",
    matric: "1909003030",
    address: "blue lodge, irewumni community, ado-ekiti",
    image: "",
  },
  {
    name: "owoeye oluwashina samuel",
    matric: "1909003073",
    address: "baddo lodge, unity iworoko",
    image: "",
  },
  {
    name: "esan favour olaniyi",
    matric: "1909003038",
    address: "adeparusi street, opp dave hotel, adebayo",
    image: "favour.jfif",
  },
];

const membersEl = document.querySelector(".members");
for (const member of members) {
  const stringElement = `
    <section class="member">
      <img src="./images/${member.image ? member.image : "placeholder.jpg"}" />
      <div class="details">
        <p class="name">${member.name}</p>
        <p class="address">${member.address ? member.address : "null"}</p>
        <p class="matric">${member.matric}</p>
        <p class="cgpa">${member.cgpa ? member.cgpa : "5.0"}</p>
      </div>
    </section>`;
  membersEl.insertAdjacentHTML("beforeend", stringElement);
}
