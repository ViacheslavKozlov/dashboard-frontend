import { useMediaQuery } from "react-responsive";
import { device } from "../common/deviceSizes";

const useDeviceSizes = () => {
  const isMobileDevice = useMediaQuery({
    query: device.mobile
  });

  const isTabletDevice = useMediaQuery({
    query: device.tablet
  });

  const isDescDevice = useMediaQuery({
    query: device.desc
  });

  return { isMobileDevice, isTabletDevice, isDescDevice };
};

export default useDeviceSizes;
