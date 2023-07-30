export const DATA_FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
} as const;

export const FILTERS_BUTTONS = {
  [DATA_FILTERS.ALL]: {
    literal: "All",
    href: `/?filter=${DATA_FILTERS.ALL}`,
  },
  [DATA_FILTERS.ACTIVE]: {
    literal: "Active",
    href: `/?filter=${DATA_FILTERS.ACTIVE}`,
  },
  [DATA_FILTERS.COMPLETED]: {
    literal: "Completed",
    href: `/?filter=${DATA_FILTERS.COMPLETED}`,
  },
} as const;
