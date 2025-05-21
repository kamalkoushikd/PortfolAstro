import React, { useState } from "react";

const CategoryIcons = {
  "Web Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "Mobile Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
    </svg>
  ),
  "Cybersecurity": (
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 2048 2048"
           height="1.5em"
           width="1.5em"
           fill="currentColor"
           className="w-6 h-6 text-[var(--sec)] opacity-70"
      >
  <path fill="#579fff" d="M931.836 1769.447c57.726 30.071 126.601 30.071 184.327 0l.915-.477c391.156-204.206 560.049-643.948 548.076-1066.498-4.866-171.715-61.628-302.913-224.071-374.329-129.104-56.758-276.3-71.69-416.03-72.144h-2.105c-139.731.453-286.926 15.386-416.03 72.144-162.443 71.415-219.205 202.613-224.071 374.329-11.973 422.551 156.919 862.291 548.076 1066.498l.913.477z"/>
        <path fill="#000000" d="M1413.009 1230.714c-3.192-8.275-49.445 12.965-102.236 2.43-20.825-4.156-35.792-12.893-65.723-30.367-55.217-32.235-156.781-115.325-175.261-111.752-16.027 3.099-18.764 16.376-39.623 19.705-4.423.706-7.91.706-12.332 0-20.859-3.329-23.596-16.606-39.623-19.705-18.481-3.574-120.044 79.517-175.261 111.752-29.931 17.474-44.898 26.211-65.723 30.367-52.79 10.536-99.044-10.703-102.236-2.43-.859 2.227 1.473 6.403 18.257 18.22 19.297 13.588 39.283 28.085 61.445 36.643 21.83 8.43 45.842 10.664 69.005 7.991 65.142-7.52 126.865-44.171 184.833-72.729 11.467-5.65 22.917-11.338 34.406-16.943 4.865-2.374 10.148-5.832 15.437-7.194 2.093-.539 3.816-.786 5.81-.734 1.938.059 3.098.131 5.442.734 6.151 1.583 12.315 5.664 17.969 8.431 12.954 6.342 25.873 12.758 38.816 19.123 33.233 16.34 66.424 33.076 100.657 47.229 16.579 6.854 33.505 12.989 50.967 17.193 27.339 6.583 57.649 8.816 84.859.317 26.407-8.247 49.469-24.295 71.861-40.061 16.782-11.817 19.113-15.993 18.254-18.22zM1024 1711.148l105.29-290.982H918.71zM894.221 869.698a58.641 58.641 0 0 1-7.164 12.566c-16.571 22.126-46.356 29.806-73.979 30.898-33.445 1.32-67.348-4.973-97.451-19.605-52.779-25.651-83.048-75.525-106.344-127.354-3.916-8.712-7.722-17.533-10.931-26.536-1.055-2.961 82.477-20.73 88.166-21.748 74.568-13.339 159.885 9.468 200.102 78.781 12.707 21.897 17.146 50.176 7.601 72.998zM1153.769 869.698a58.641 58.641 0 0 0 7.164 12.566c16.571 22.126 46.356 29.806 73.979 30.898 33.445 1.32 67.348-4.973 97.451-19.605 52.779-25.651 83.048-75.525 106.344-127.354 3.916-8.712 7.722-17.533 10.931-26.536 1.055-2.961-82.477-20.73-88.166-21.748-74.568-13.339-159.885 9.468-200.102 78.781 12.707 21.897 17.146 50.176 7.601 72.998zM955.44 708.054a24.66 24.66 0 0 1-15.049-5.111C807.393 601.042 718.43 579.44 666.947 579.44c-.37 0-.736.001-1.102.003-48.269.291-69.793 19.308-69.988 19.5-9.764 9.586-25.449 9.441-35.035-.321-9.586-9.763-9.442-25.449.322-35.035 3.467-3.405 35.862-33.279 104.403-33.692 38.373-.2 80.834 8.903 126.296 27.148 55.173 22.143 115.291 57.997 178.684 106.568 10.86 8.321 12.92 23.872 4.598 34.732-4.879 6.368-12.241 9.711-19.685 9.711zM1092.56 708.054a24.66 24.66 0 0 0 15.049-5.111c132.997-101.9 221.96-123.503 273.443-123.503.37 0 .736.001 1.102.003 48.269.291 69.793 19.308 69.988 19.5 9.764 9.586 25.449 9.441 35.035-.321 9.586-9.763 9.442-25.449-.322-35.035-3.467-3.405-35.862-33.279-104.403-33.692-38.373-.2-80.834 8.903-126.296 27.148-55.173 22.143-115.291 57.997-178.684 106.568 10.86 8.321 12.92 23.872 4.598 34.732 4.88 6.368 12.242 9.711 19.686 9.711z"/>
</svg>

  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Web Development": [
      "Single Page Applications (SPAs)",
        "Multi-page applications (MPAs)",
      "Landing pages and business websites",
      "Portfolio websites",
        "High Performance Backends",
    ],
    "Mobile Development": [
      "Mobile-friendly web apps",
      "Native Android apps",
    ],
    "Cybersecurity": [
        "Penetration Testing",
        "Web Application Security",
        "Network Security",
        "Cryptography",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
