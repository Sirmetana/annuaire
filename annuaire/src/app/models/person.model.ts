export type Person = {
  gender: "female" | "male";
  name:
  {
    title:string;
    first:string;
    last:string;
  };
  location:
  {
    street:
    {
        number: number;
        name: string;
    };
    city:string;
  };
  email: string;
  login:
  {
    uuid: string;
    username: string;
  };
  dob:
  {
    date: Date;
    age: number;
  };
  phone: string;
  cell: string;
  picture:
  {
    thumbnail:string;
    medium:string;
    large:string;
  };
};

export type PersonsResponse = {
  results: Person[];
  info:
  {
    seed: string;
    results: number;
    page: number;
    version: string;
  }
};