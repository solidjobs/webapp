export class UserProfile {
  id: number;
  name: string;
  nameUnique: string;
  email: string;


  constructor(id: number, name: string, nameUnique: string, email: string) {
    this.id = id;
    this.name = name;
    this.nameUnique = nameUnique;
    this.email = email;
  }
}
