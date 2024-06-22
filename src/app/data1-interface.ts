export interface Data1Interface  {
        id: number;
        title: string;
        img: string;
        alt: string;
        description: string;
        headImg: string;
        year_of_release: string; // Year, Month (0-indexed), Day
        seasons: number;
        languages: string;
        U_A: string; // Assuming U_A stands for User Age rating
        genera: string[]; // Assuming genera is a typo and you meant genres
        watch_hours: string;
        seasons_name: string[]; // Not sure why this is needed, as seasons is already a number
      }