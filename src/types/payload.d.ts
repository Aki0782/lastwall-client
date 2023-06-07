interface Payload {
  name: string;
  username: string;
  phone: string;
  email: string;
}

interface payloadData extends Payload {
  id: number;
}
