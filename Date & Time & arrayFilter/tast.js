//Ans the question : 1 

const now = new Date();

const time = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
const date = now.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
const day = now.toLocaleDateString("en-US", {weekday:"long"});
console.log(time+ "," + date + "," + day);
//console.log(`${time}, ${date}, ${day}`);


//Ans the quastion :2

const students = [
  { name: "রাহুল", passingYear: 2021, city: "Dhaka" },
  { name: "সারা", passingYear: 2022, city: "Dhaka" },
  { name: "অনিক", passingYear: 2023, city: "Chittagong" },
  { name: "মিতা", passingYear: 2024, city: "Dhaka" },
  { name: "করিম", passingYear: 2025, city: "Dhaka" },
  { name: "ফারহান", passingYear: 2020, city: "Dhaka" },
  { name: "নাদিয়া", passingYear: 2022, city: "Sylhet" },
  { name: "আলী", passingYear: 2023, city: "Dhaka" },
  { name: "তানিয়া", passingYear: 2024, city: "Rajshahi" },
  { name: "সোহান", passingYear: 2025, city: "Dhaka" },
  { name: "মেহরিন", passingYear: 2021, city: "Dhaka" },
  { name: "জুবায়ের", passingYear: 2022, city: "Dhaka" },
  { name: "রিয়া", passingYear: 2023, city: "Barisal" },
  { name: "ইমরান", passingYear: 2024, city: "Dhaka" },
  { name: "শিমা", passingYear: 2025, city: "Khulna" },
  { name: "আরিফ", passingYear: 2022, city: "Dhaka" },
  { name: "সুমাইয়া", passingYear: 2023, city: "Dhaka" },
  { name: "তাহমিদ", passingYear: 2021, city: "Chittagong" },
  { name: "নুসরাত", passingYear: 2024, city: "Dhaka" },
  { name: "সাকিব", passingYear: 2025, city: "Dhaka" },
];
const search = students.filter(student => 
  student.passingYear >= 2022 &&
  student.passingYear <= 2025 &&
  student.city === "Dhaka"
);

console.log(search);