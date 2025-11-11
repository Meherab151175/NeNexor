
import React from 'react';
import { Goal } from '../../types';

const MessageSquareIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>);
const BotIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>);
const ZapIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>);

const goals: Goal[] = [
  { icon: <MessageSquareIcon />, title: 'Goal #1', description: 'Inspire positive change and social growth through impactful, forward-thinking media.' },
  { icon: <BotIcon />, title: 'Goal #2', description: 'Create next-generation automation systems that redefine personal and professional productivity.' },
  { icon: <ZapIcon />, title: 'Goal #3', description: 'Elevate IT operations to deliver unmatched quality for clients and drive operational excellence across businesses.' },
];

const GoalsSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our <span className="text-primary">Goals</span></h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our guiding principles and long-term aspirations that drive our innovation and commitment to excellence.
            </p>
          </div>
          <div className="space-y-8">
            {goals.map((goal, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                  {goal.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{goal.title}</h3>
                  <p className="mt-1 text-muted-foreground">{goal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
