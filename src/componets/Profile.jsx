import React from "react";

const Profile = ({ name, number, email, image }) => {
  return (
    <section className="card-1">
      <div>
        <h1>{name}</h1>
        <img src={image} />
        <div>
          <p className="numb">{number}</p>
          <p className="email">{email}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
