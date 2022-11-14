const members = [
  {
    name: "Bamidele Damilola Joseph",
    matric: "1909003030",
  },
  {
    name: "this nigga is a muthafuckker",
    matric: "eat my shit",
  },
];

const membersEl = document.querySelector(".members");
for (const member of members) {
  const stringElement = `
    <section class="member">
      <img src="./images/eksu-logo.jpg" />
      <div class="details">
        <p class="name">${member.name}</p>
        <p class="address">${member.address ? member.address : "null"}</p>
        <p class="matric">${member.matric}</p>
        <p class="cgpa">${member.cgpa ? member.cgpa : "null"}</p>
      </div>
    </section>`;
  membersEl.insertAdjacentHTML("beforeend", stringElement);
}
