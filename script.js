// Team data
const team = [
  { role: "President", name: "Musa N." },
  { role: "Vice President", name: "Dr. Abdi G." },
  { role: "Secretary", name: "Abdulwahid A." },
  { role: "Financial Affairs", name: "Musa I." },
  { role: "Team Leader", name: "Ahmed M." },
  { role: "Advisor", name: "Esmael S." }
];

// Members list
const members = [
  "Arsenal H", "Abdisa D", "Abdisa J", "Urgesa J",
  "Nageso G", "Abdisa D", "Awel Jemal", "Ibrahim Ch",
  "Bashir A", "Mustefa J", "Abdisa H", "Abdela W",
  "Jemal D", "Abdulhakim T"
];

// Load team and members on window load
window.onload = () => {
  const teamList = document.getElementById("team-list");
  const memberList = document.getElementById("member-list");

  // Add team roles
  team.forEach(person => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${person.role}</strong><br>${person.name}`;
    teamList.appendChild(div);
  });

  // Add members
  members.forEach(member => {
    const li = document.createElement("li");
    li.textContent = member;
    memberList.appendChild(li);
  });
};

// Handle registration form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("register-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("fullname").value;
      const email = document.getElementById("email").value;

      document.getElementById("form-response").textContent = `Thank you, ${name}. We received your email: ${email}`;
      form.reset();
    });
  }
});



