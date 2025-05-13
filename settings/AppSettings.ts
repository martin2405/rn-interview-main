const AppSettings = {
  errorRate: 0.1,
};

export const updateErrorRate = (errorRate: number) => {
  AppSettings.errorRate = errorRate;
};

export const getErrorRate = () => {
  return AppSettings.errorRate;
};
