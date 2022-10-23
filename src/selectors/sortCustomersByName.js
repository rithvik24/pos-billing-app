export const sortNameAtoZ = (customers) => {
  return [...customers.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    }),
  ];
};


export const sortNameZtoA = (customers) => {
    return [...customers.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return 1;
          } else {
            return -1;
          }
        }),
      ];
}