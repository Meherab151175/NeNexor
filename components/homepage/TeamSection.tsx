
import React from 'react';
import { TEAM_MEMBERS } from '../../constants';
import { TeamMember } from '../../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="text-center">
      <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary/50 shadow-lg" />
      <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
      <p className="text-primary">{member.role}</p>
    </div>
  );
};

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our <span className="text-primary">Management Team</span></h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our commitment to progress, innovation, and leadership.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map(member => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
