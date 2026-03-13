import React, { useEffect, useState } from 'react';
import {
  Gift,
  Heart,
  Instagram,
  Facebook,
  MessageCircle,
  MapPin
} from 'lucide-react';

const Footer: React.FC = () => {
  const [isGifts, setIsGifts] = useState(false);

  useEffect(() => {
    const updateCategory = () => {
      const category = document.body.getAttribute('data-category');
      setIsGifts(category === 'gifts');
    };

    // Initial read
    updateCategory();

    // Watch for category changes
    const observer = new MutationObserver(updateCategory);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-category'],
    });

    return () => observer.disconnect();
  }, []);

  const instagramUrl = isGifts
    ? 'https://www.instagram.com/rd__gifts'
    : 'https://www.instagram.com/rdframess/';
  
  const emailID = isGifts
    ? 'mailto:rdgifts2@gmail.com'
    : 'mailto:rdframess@gmail.com' 

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-button rounded-full flex items-center justify-center">
                <img className="h-10 w-10 rounded-full object-cover" src="/rd.jpg" alt="Description of image"></img>{/*<Gift className="w-5 h-5 text-primary-foreground" />*/}
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">RD Frames</h3>
                <p className="text-xs opacity-70">Memories Made Special</p>
              </div>
            </div>
            <p className="text-sm opacity-70 max-w-sm">
              We create beautiful personalized gifts that help you celebrate life's
              precious moments with your loved ones.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#products" className="hover:opacity-100 transition-opacity">Products</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="font-display font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-4">
              <a
                href={instagramUrl}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/*<a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>*/}
              <a href="tel:+917904303438" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </a>

              <a href="https://wa.me/917904303438" className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:bg-[#20BA5A] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>

              <a href={emailID} className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </a>

              <a href="https://maps.app.goo.gl/nyHrXEo7mcwM2dg87?g_st=aw" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm opacity-70">
              Order via WhatsApp for quick assistance!
            </p>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm opacity-50">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by RD Frames
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
