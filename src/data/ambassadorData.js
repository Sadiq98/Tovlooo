// File: src/data/ambassadorData.js
// Ambassador profile draft, kept in localStorage until the ambassador API
// is available.
const STORAGE_KEY = "tovloAmbassadorProfile";

const emptyProfile = {
  general: {},
  personal: {},
  social: {},
  applicationStatus: "draft",
};

export const getAmbassadorProfile = () => {
  try {
    return {
      ...emptyProfile,
      ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"),
    };
  } catch {
    return emptyProfile;
  }
};

export const saveAmbassadorProfile = (updates) => {
  const profile = { ...getAmbassadorProfile(), ...updates };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  return profile;
};
