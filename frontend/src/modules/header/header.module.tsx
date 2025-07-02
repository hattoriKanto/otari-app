import { Link } from "react-router-dom";
import DarkModeSwitcher from "@/components/dark-mode-switcher/dark-mode-switcher.component";
import Container from "@/components/container/container.component";
import PATHS from "@/constants/paths";

export default function HeaderModule() {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link to={PATHS.HOME}>
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
              Otari App
            </h1>
          </Link>
          <DarkModeSwitcher />
        </div>
      </Container>
    </header>
  );
}
