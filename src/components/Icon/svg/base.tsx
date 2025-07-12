import { FC, JSX } from "react";
import * as T from "../types";

/**
 *  <h3>Como adicionar novos ícones?</h3>
 *  <p>
 *    Para criar novos ícones, basta ter o <code>path</code> ou <code>g</code> (group) do svg desejado.
 *  </p>
 *  <p>
 *    1. Crie um novo arquivo na pasta <code>svg</code>, com o formato Nome +
 *    Icon, exemplo: <code>MenuIcon</code>
 *  </p>
 *  <p>
 *    2. Adicione o path ou group do svg dentro do arquivo e configure a cor,
 *    seguindo o padrão dos outros ícones.
 *  </p>
 *  <p>3. Exporte o ícone no index.tsx</p>
 *  <p>4. Adicione um novo story ao Storybook, no arquivo index.stories.tsx</p>
 */
export const IconBase: FC<T.Icon> = ({
  path,
  size,
  viewBox = "0 0 26 26",
  onClick,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={`${size}px`}
      height={`${size}px`}
      onClick={onClick}
      fill="none"
    >
      {path as JSX.Element}
    </svg>
  );
};
