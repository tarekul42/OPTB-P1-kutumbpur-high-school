/**
 * App-wide configuration for school name, version, and feature flags.
 */

export const CONFIG = {
  SCHOOL_NAME: 'Kutumbpur High School',
  SCHOOL_ESTABLISHED: '1970',
  VERSION: '1.0.0',
  
  // Feature flagging for in-progress or experimental pages
  FEATURES: {
    CURIOSITY_CORNER: {
      ENABLED: false,
      LABEL: 'Coming Soon',
    },
    ADMISSION_INQUIRY: {
      ENABLED: true,
      LABEL: 'Active',
    },
    ONLINE_FEES: {
      ENABLED: true,
      LABEL: 'Demo',
    },
  },
} as const;

export type AppConfig = typeof CONFIG;
