import { FC } from 'react';
import { SVG } from '../../interfaces';

const ProfileSVG: FC<SVG> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.7867 12.78C12.7167 12.77 12.6267 12.77 12.5467 12.78C10.7867 12.72 9.38675 11.28 9.38675 9.50998C9.38675 7.69998 10.8467 6.22998 12.6667 6.22998C14.4767 6.22998 15.9467 7.69998 15.9467 9.50998C15.9367 11.28 14.5467 12.72 12.7867 12.78Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.4067 19.3801C17.6267 21.0101 15.2667 22.0001 12.6667 22.0001C10.0667 22.0001 7.70674 21.0101 5.92674 19.3801C6.02674 18.4401 6.62674 17.5201 7.69674 16.8001C10.4367 14.9801 14.9167 14.9801 17.6367 16.8001C18.7067 17.5201 19.3067 18.4401 19.4067 19.3801Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6667 22C18.1896 22 22.6667 17.5228 22.6667 12C22.6667 6.47715 18.1896 2 12.6667 2C7.1439 2 2.66675 6.47715 2.66675 12C2.66675 17.5228 7.1439 22 12.6667 22Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ProfileSVG;
