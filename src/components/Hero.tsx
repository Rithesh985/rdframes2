import React from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  userName?: string | null;
}

const Hero: React.FC<HeroProps> = ({ userName }) => {
  return (
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/50 text-secondary-foreground px-4 py-2 rounded-full mb-6 animate-fade-in">
            {/*<span className="text-sm font-medium">
              {userName ? `Hi ${userName} 👋` : ""}
            </span>*/}
            <span className="text-sm font-medium">
              Personalized Gifts for Every Occasion
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            {userName ? `Hi ${userName} 👋` : ""}
          </h1>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Turn Your <span className="text-gradient">Memories</span> Into Beautiful Gifts
          </h1>

          <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
            From stunning photo frames to unique personalized gifts, we help you
            celebrate life's precious moments with love and creativity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <a
              href="#products"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
