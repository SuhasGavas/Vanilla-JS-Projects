const reviews = [
  { id: 1, name: "A", review: "Some review1" },
  { id: 2, name: "B", review: "Some review2" },
  { id: 3, name: "C", review: "Some review3" },
];

const name_disp = document.getElementById("name");
const review_disp = document.getElementById("review");
const btn = document.getElementById("btn");

name_disp.innerHTML = reviews[0].name;
review_disp.innerHTML = reviews[0].review;

btn.addEventListener("click", () => {
  const random_num = Math.floor((Math.random() * 3) % 3);
  console.log(random_num);
  name_disp.innerHTML = reviews[random_num].name;
  review_disp.innerHTML = reviews[random_num].review;
});
