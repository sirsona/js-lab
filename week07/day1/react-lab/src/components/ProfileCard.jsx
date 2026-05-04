import Greeting from "./Greeting.jsx";

function ProfileCard({ name, role, avatar, children }) {
  return (
    <div>
      <Greeting name={name} />
      my role is {role} <img src={avatar} alt="" /> {/* custom footer */}
      <div>{children}</div>
    </div>
  );
}

export default ProfileCard;
