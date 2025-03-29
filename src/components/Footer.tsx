
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-sage-700">Dr. Solomon Assefa Derese</h3>
            <p className="text-sm text-muted-foreground">
              Lecturer | Plant Breeding Scientist | Agricultural Educator
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-sage-700">Home</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-sage-700">About</Link>
              <Link to="/research" className="text-sm text-muted-foreground hover:text-sage-700">Research</Link>
              <Link to="/teaching" className="text-sm text-muted-foreground hover:text-sage-700">Teaching</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-sage-700">Contact</Link>
            </nav>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Affiliation</h3>
            <div className="text-sm text-muted-foreground">
              <p>Woldia University</p>
              <p>Department of Plant Sciences</p>
              <p>Woldia, Ethiopia</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="text-sm text-muted-foreground">
              <p>YouTube: Let's Learn Agriculture Together</p>
              <p>Email: derese@wldu.edu.et</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dr. Solomon Assefa Derese. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
