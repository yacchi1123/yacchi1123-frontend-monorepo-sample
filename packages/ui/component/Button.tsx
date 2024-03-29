import * as React from "react";

type Props = {
  children: React.ReactNode
}

export const Button: React.FC<Props> = ({children}) => {
  return <button style={{
    color: 'red'
  }}>{children}</button>;
};
