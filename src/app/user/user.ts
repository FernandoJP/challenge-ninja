export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    website: string;
    phone: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: number;
        lng: number;
      }
    }
}