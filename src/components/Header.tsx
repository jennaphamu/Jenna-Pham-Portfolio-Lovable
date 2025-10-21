import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-foreground/5">
      <div className="px-5 md:px-[90px] py-5 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl md:text-3xl font-bold italic">
            Perspective
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <button className="nav-text text-secondary hover:underline">
              SIGN IN
            </button>
            <Button variant="small" showArrow={false}>
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
