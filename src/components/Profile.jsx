import ProfileCard from "@/utilities/ProfileCard";
import React from "react";

const profilesPromise = async () => {
  const res = await fetch("http://localhost:3000/profileData.json");
  const data = await res.json();
  return data;
};

const Profile = async () => {
  const profiles = await profilesPromise();
  console.log(profiles, "where Iam calling from ");

  return (
    <section className="max-w-full w-full mx-auto px-4 py-8 md:py-16">
      {/* Section heading */}
      <div className="flex items-end justify-between mb-10 max-w-7xl mx-auto">
        <div>
          <h2 className="font-serif text-4xl mt-2 font-light">
            All the people who matter, gathered in one place.
          </h2>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {/* all profile cards go here */}
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile}></ProfileCard>
        ))}
      </div>
    </section>
  );
};

export default Profile;
