import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems } from "../../helpers/constants";
import { bottomNavItems } from "../../helpers/constants";
import Logo from "../ui/logo";

const Sidebar = () => {
  const location = useLocation();
  const activeLinkClass = "bg-[#10062b] bg-opacity-20 font-medium";
  const inactiveLinkClass = "hover:bg-gray-400 hover:bg-opacity-10";

  return (
    <div className="w-64 min-h-screen bg-gradient-to-r from-[#10062b] to-[#420129] text-white   p-4 flex flex-col fixed">
      <Link to="/dashboard">
        <Logo />
      </Link>
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/dashboard"}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    isActive ? activeLinkClass : inactiveLinkClass
                  }`
                }
              >
                <item.icon size={20} />
                <span className="text-sm">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="mt-auto pt-4 ">
        <ul className="space-y-2">
          {bottomNavItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    isActive ? activeLinkClass : inactiveLinkClass
                  }`
                }
              >
                <item.icon size={20} />
                <span className="text-sm">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
