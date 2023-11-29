import { Dispatch, SetStateAction } from "react";
import { DeepMap, FieldError, Path, RegisterOptions, UseFormRegister } from "react-hook-form";

// types
export type ErrorResponse = {
  data: any;
  status: number;
  statusText: string;
  message?: string;
};

export type ContextUserType = [User | null, Dispatch<SetStateAction<User | null>>]
// interfaces

export interface InputCustomProps {
  label?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  name: Path<any>;
  type?: string;
  errors: Partial<DeepMap<any, FieldError>>;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rules?: RegisterOptions;
  disabled?: boolean;
  css?: any;
  showError?: any
  value?: any
  withOutStyle?: boolean
};

export interface UserProviderProps {
  children: React.ReactNode;
}

export interface User {
  id: string;
  name: string;
  lastname: string;
  email: string;
  mobile: string;
  emergencyphone: string;
  birthday: string;
  token: string;
}

export interface UserContextValue {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export interface DashboartRoutesProps {
  name: string;
  path: string;
  icon: React.ReactNode;
}

export interface BackButtonProps {
  to: string
}

export interface Employees {
  id: string;
  name: string;
  lastname: string;
  mobile: string;
  emergencyphone: string;
  birthday: string;
}

export interface NavigateCrudsProps {
  title: string;
  typeCrud: 'view'| 'edit' | 'table';
  createRoute: string;
  createButtonText?: string;
  backRoute: string;
}

export interface EmployeesFormProps{
  typeCrud: 'create'| 'edit' | 'view';
}

export interface Tools {
  id: string;
  name: string;
  description: string;
  bearer: string;
  dateOfAperture: string;
  returnDate: string;
  employee: string;
  service: string;
}
export interface Services {
  id: string;
  service: string;
  description: string;
  client: string;
  dateOfAssistance: string;
  budget:number
  status: string;
}

export interface SelectCustomProps {
  options: OptionsSelectCustom[];
  name: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
  label?: string;
  disabled?: boolean;
}

export interface OptionsSelectCustom{
  label: string;
  value: string;
}

export interface DeleteModalProps {
  isOpen:any,
  onOpenChange:any,
  id:number,
  title:string,
  textContent:string,
  type: 'employee' | 'service' | 'tool'
}