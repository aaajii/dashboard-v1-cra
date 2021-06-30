import { Link, useLocation } from 'react-router-dom';

import data from './data';

const style = {
  title: `mx-4 text-sm`,
  section: `font-medium mb-4 pl-5 text-gray-500 text-lg lg:pl-6`,
  link: `flex items-center justify-start my-1 p-3 text-white w-full`,
  active: `border-white lg:border-red-300 border-l-4 lg:border-l-0 lg:border-r-4`,
};

export default function SidenavItems() {
  const { pathname } = useLocation();
  return (
    <ul className="mt-6 md:pl-6">
      <li>
        {data.map((section) => (
          <div className="mb-10" key={section.section}>
            <div className={style.section}>{section.section}</div>
            {section.content.map((item) => (
              <Link to={item.link} key={item.title}>
                <span
                  className={`${style.link} 
                   ${item.link === pathname && style.active}`}
                >
                  <span>{item.icon}</span>
                  <span className={style.title}>{item.title}</span>
                </span>
              </Link>
            ))}
          </div>
        ))}
      </li>
    </ul>
  );
}
