const ProfileCard = ({ name, role }) => {
    const avatarUrl = `https://robohash.org/${encodeURIComponent(name)}.png`;
  
    return (
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105">
        <img
          src={avatarUrl}
          alt={`${name} avatar`}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-white">
          {name}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
          {role}
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Contact
          </button>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
  