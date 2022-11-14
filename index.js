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
    image: "IMG-20221114-WA0030.jpg",
  },
  {
    name: "esan favour olaniyi",
    matric: "1909003038",
    address: "adeparusi street, opp dave hotel, adebayo",
    image: "favour.jfif",
  },
{
    name: "Olajide Olalekan Simon",
    matric: "1808003090",
    address: "phase 2 osekita",
    image: "IMG-20221114-WA0025.jpg",
  },
{
    name: "ADEWUMI AYODELE AKEEM",
    matric: "1909003005",
    address: "Are road 8 iworoko",
    image: "IMG-20221114-WA0026.jpg",
  },
{ 
    name: "Onibaba OLADAMOLA",
    matric: "1909003070",
    address: "Alao French centre road, Adehun",
    image: "IMG-20221114-WA0028.jpg",
  },
{
    name: "Sunday Oloruntobi John",
    matric: "1909003080",
    address: "Lungi, Maitama, AMAC",
    image: "IMG-20221114-WA0029.jpg",
  },
{
    name: "Akinola Tosin Samuel",
    matric: "178862120",
    address: "Macedonia Hostel, Satellite, EKSU, Ado-Ekiti State",
    image: "IMG-20221114-WA0031.jpg",
  },
{
    name: "Akinsanya Oluwaseun Kemi",
    matric: "1909003015",
    address: "Anglican Hostel, 2 in 1",
    image: "IMG-20221114-WA0036.jpg",
  },
{  
    name: "Abdulraheem Habib Onimisi",
    matric: "2009003002",
    address: "No 5 Midas Avenue",
    image: "IMG-20221114-WA0038.jpg",
  },
{
    name: "Fagbohun Olamide Esther",
    matric: "168870075",
    address: "12, Onishinla GRA, Ado Ekiti",
    image: "IMG-20221114-WA0039.jpg",
  },
{
    name: "OWOEYE OLUWATOBI ISAAC",
    matric: "1909003074",
    address: "Are road 2",
    image: "",
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
