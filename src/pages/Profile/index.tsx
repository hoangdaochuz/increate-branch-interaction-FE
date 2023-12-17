import AvatarComponent from "./components/AvatarComponent";
import ProfileForm from "./components/ProfileForm";

const Profile = () => {
  return (
    <div className="mt-[30px]">
      <h2 className="text-2xl font-semibold text-blue-500 mb-[20px]">Profile</h2>
      <div className="flex">
        <ProfileForm />
        <AvatarComponent />
      </div>
    </div>
  );
};
export default Profile;
