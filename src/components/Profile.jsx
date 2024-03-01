import { useUser } from "../Context/Context";

const Profile = () => {
  const { displayName } = useUser();
  const userEmail = localStorage.getItem("Email");
  console.log(userEmail);
  return (
    <div className="text-2xl text-yellow-500">
      <h2>{displayName}</h2>
      <h2>{userEmail}</h2>
    </div>
  );
};

export default Profile;
