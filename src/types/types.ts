export interface IUserData {
  address: {
    city: string;

    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export interface INewUser {
  Address: string;
  Adress: string;
  Client: string;
  Courier: string;
  id: string;
}
