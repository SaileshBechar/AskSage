export class Broker {
    name: string;
    email: string;
    brokerage: string;
    bdr: {
        name: string;
        phone: string;
        role: string;
        company: string;
        email: string;
        address: {
            street: string;
            city: string;
            province: string;
            postalCode: string;
        }
    }
}
