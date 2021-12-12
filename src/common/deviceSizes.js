import { useMediaQuery } from "react-responsive";

export const size = {
  mobile: "320px",
  beforeTablet: "767px",
  tablet: "768px",
  beforeDesc: "1279px",
  desc: "1280px",
};

export const device = {
  mobile: `(min-width:${size.mobile}) and (max-width:${size.beforeTablet})`,
  tablet: `(min-width:${size.tablet}) and (max-width:${size.beforeDesc})`,
  desc: `(min-width:${size.desc})`,
};

export const Mobile = ({ children }) => {
  const isMobileQuery = useMediaQuery({
    query: device.mobile,
  });
  return isMobileQuery && children;
};

export const Tablet = ({ children }) => {
  const isTabletQuery = useMediaQuery({
    query: device.tablet,
  });
  return isTabletQuery && children;
};

export const Desc = ({ children }) => {
  const isDescQuery = useMediaQuery({
    query: device.desc,
  });
  return isDescQuery && children;
};
