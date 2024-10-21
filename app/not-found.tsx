import type { Metadata } from "next";
import { Link, Button } from "@nextui-org/react";
export const metadata: Metadata = {
  title: "404 - Não encontramos essa página",
  description: "Não encontramos essa página",
};
const NotFoundPage = () => {
  return (
    <main className="px-4 ">
      <div className="flex flex-col w-full items-center justify-center pt-36">
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 id="h-txt" className="text-8xl mb-2">
            404
          </h1>
          <p id="s-txt" className="text-xl">
            Não encontramos essa página
          </p>
          <Button
            id="btn-txt"
            color="primary"
            as={Link}
            href="/"
            className="text-lg"
            variant="solid"
          >
            Voltar ao Início
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
