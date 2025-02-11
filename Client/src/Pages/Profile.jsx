import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={user.name} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={user.email} />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Profile;
