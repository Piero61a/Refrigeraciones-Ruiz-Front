import { Card, CardHeader, CardBody } from "@nextui-org/react";
import RegisterForm from "../../../components/forms/RegisterForm";

const RegisterPage = () => {
  return (
    <div
      className="w-screen h-screen flex"
    >
      <div className="w-1/2 h-full bg-hero-pattern bg-cover" />
      <div className="w-1/2 h-full bg-secondary_bg grid place-content-center">
        <Card className="p-10 min-h-3/4  rounded-none">
          <CardHeader className="pb-0 pt-2 px-4 flex-col">
            <h2 className="text-3xl text-center text-primary_text">Refrigeraciones Ruiz</h2>
            <p className="text-3xl mt-14">Registro</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <RegisterForm />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage