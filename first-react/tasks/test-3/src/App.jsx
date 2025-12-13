import "./App.css";
import Members from "./Members";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
import image5 from "./assets/image5.jpg";

// member’s name, role, photo, and a short bio

const membersList = [
  {
    id: 1,
    name: "Malenia",
    role: "Blade of Miquella",
    bio: "I sleep amidst scarlet rot, awaiting his return",
    image: image3, // Assign imported image
  },
  {
    id: 2,
    name: "Ranni",
    role: "Witch",
    bio: "I weave my night into being",
    image: image1,
  },
  {
    id: 3,
    name: "Godfrey",
    role: "First Elden Lord",
    bio: "I am returned. To be granted audience once more",
    image: image5,
  },
  {
    id: 4,
    name: "Hewg",
    role: "Smithing Master",
    bio: "Given time, technique never fails.",
    image: image2,
  },
  {
    id: 5,
    name: "Melina",
    role: "Finger Maiden",
    bio: "I offer you an accord.",
    image: image4,
  },
];

function App() {
  return (
    <>
      {membersList.map(member => (
        <Members
          key={member.id}
          image={member.image}
          name={member.name}
          role={member.role}
          bio={member.bio}
        />
      ))}
    </>
  );
}

export default App;
