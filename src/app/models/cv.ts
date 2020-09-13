/**
 * Created by Melanie Caballero on 8/9/19.
 */

export class Cv {
    private _id: number;
    private _userId: number;
    private _name: string;
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _picture: string;
    private _phone: string;
    private _city: string;
    private _localAddress: string;
    private _jobName: string;
    private _secretId: string;


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get userId(): number {
        return this._userId;
    }

    set userId(value: number) {
        this._userId = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get picture(): string {
        return this._picture;
    }

    set picture(value: string) {
        this._picture = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get localAddress(): string {
        return this._localAddress;
    }

    set localAddress(value: string) {
        this._localAddress = value;
    }

    get jobName(): string {
        return this._jobName;
    }

    set jobName(value: string) {
        this._jobName = value;
    }

    get secretId(): string {
        return this._secretId;
    }

    set secretId(value: string) {
        this._secretId = value;
    }
}