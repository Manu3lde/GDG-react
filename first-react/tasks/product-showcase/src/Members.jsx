function Members(members) {
  // member’s name, role, photo, and a short bio

  return (
    <div className="members-card">
      <div className="header">
        <div className="avatar">
          <img src={members.image} />
        </div>
      </div>
      <div className="card-body">
        <div className="user-meta">
          <h3 className="name">{members.name}</h3>
          <h5 className="role">{members.role}</h5>
        </div>
        <div className="user-bio">
          <p>{members.bio}</p>
        </div>
      </div>
    </div>
  );
}

// Members.propTypes = {
//   name: PropTypes.string,
//   role: PropTypes.string,
// };

export default Members;
