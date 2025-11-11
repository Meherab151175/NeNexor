
import React from 'react';

const MailIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>);
const PhoneIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
const GlobeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>);
const TwitterIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 4.9-6.1-1.4-12.1-7.4-12.1-7.4-1.6 3.3 2.1 6.8 2.1 6.8-1.2 0-2.4-.4-3.3-.8 0 4.9 3.5 8.1 3.5 8.1-1.1.3-2.2.4-3.3.4 2.8 4.4 7.7 4.1 7.7 4.1-3.1 2.4-7.1 3.9-11.6 3.9-1.6 0-3.2-.2-4.7-.7 3.9 2.5 8.6 4.1 13.6 4.1 10.4 0 16.1-8.6 16.1-16.1 0-.2 0-.5 0-.7 1.1-1 2-2.3 2.8-3.7z"/></svg>);

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <a href="#home" className="flex items-center gap-2 text-2xl font-bold">
              <svg width="32" height="32" viewBox="0 0 100 100" className="text-primary"><path fill="currentColor" d="M85.3,55.9c-2.8-5.3-7-9.5-12.3-12.3c-5.3-2.8-11.2-4.2-17.5-4.2s-12.3,1.4-17.5,4.2c-5.3,2.8-9.5,7-12.3,12.3c-2.8,5.3-4.2,11.2-4.2,17.5c0,6.4,1.4,12.3,4.2,17.5c2.8,5.3,7,9.5,12.3,12.3c5.3,2.8,11.2,4.2,17.5,4.2s12.3-1.4,17.5-4.2c5.3-2.8,9.5-7,12.3-12.3c2.8-5.3,4.2-11.2,4.2-17.5C89.5,67.1,88.1,61.2,85.3,55.9z M65.5,10.5c-5.3,2.8-9.5,7-12.3,12.3c-2.8,5.3-4.2,11.2-4.2,17.5c0,1,0,2.1,0.2,3.1c3.9-2.3,8.3-3.4,13.2-3.4c8.4,0,16.1,3.4,21.6,8.9c5.5,5.5,8.9,13.2,8.9,21.6c0,4.9-1.2,9.3-3.4,13.2c1,0.2,2.1,0.2,3.1,0.2c6.4,0,12.3-1.4,17.5-4.2c5.3-2.8,9.5-7,12.3-12.3c2.8-5.3,4.2-11.2,4.2-17.5c0-6.4-1.4-12.3-4.2-17.5C97.8,19,93.6,14.7,88.3,12C83.1,9.2,77.2,7.8,70.8,7.8C68.9,7.8,67.1,8,65.5,10.5z"></path></svg>
              <span className="text-foreground">Nexer</span>
            </a>
            <p className="mt-4 text-muted-foreground">Your trusted friend in cutting-edge technology.</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-6">Connect with us.</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MailIcon />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:md@neonexor.com" className="text-muted-foreground hover:text-primary">md@neonexor.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <PhoneIcon />
                  <div>
                    <p className="font-semibold">Call us</p>
                    <a href="tel:01627277284" className="text-muted-foreground hover:text-primary">01627277284</a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <GlobeIcon />
                   <div>
                    <p className="font-semibold">Website</p>
                    <a href="http://neonexor.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">neonexor.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <TwitterIcon />
                  <div>
                    <p className="font-semibold">Social Media</p>
                    <p className="text-muted-foreground">@neonexor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nexer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
