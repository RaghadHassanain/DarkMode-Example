import ProfileCard from './ProfileCard';

const teamMembers = [
  { name: 'Alex Johnson', role: 'Frontend Developer' },
  { name: 'Sam Wilson', role: 'UX Designer' },
  { name: 'Taylor Smith', role: 'Backend Engineer' },
  { name: 'Lana Adams', role: 'Project Manager' },
  { name: 'Chris Lee', role: 'QA Engineer' },
];

const Team = () => {
  return (
    <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6">
      {teamMembers.map((member, index) => (
        <ProfileCard key={index} name={member.name} role={member.role} />
      ))}
    </section>
  );
};

export default Team;
