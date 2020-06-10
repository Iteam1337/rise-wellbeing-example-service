type Parameter = {
  key: string;
  value: string;
};

type User = {
  email: string;
  password: string;
};

type RegistrationPayload = User & {
  params: Parameter[];
};

export type { Parameter, RegistrationPayload, User };
