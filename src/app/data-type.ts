export interface signUp{
    name : string,
    email : string,
    password : string
}

// export interface signUp {
//   name: string;
//   email: string;
//   password: string;
//   role: 'seller' | 'user';
// }

export interface logIn{
    email:string,
    password:string
}

// export interface logIn {
//   email: string;
//   password: string;
// }

export interface Products {
ProductName: string;
ProductPrice: number;
ProductColor: string;
ProductCategory: string;
ProductDescriptions: string;
ProductUrl: string;
id:number
}