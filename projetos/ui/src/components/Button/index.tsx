import React from 'react';
import { ButtonWrapper, ButtonWrapperProps } from './styles/ButtonWapper';

// const nome: string = 'Allef';


interface ButtonBaseProps {
  type?: "button" | "submit" | "reset";
  
  /**
   * Essa prop usa o disabled padrão do HTML e aplica um CSS junto!
   */
  disabled?: boolean;
  /**
   * Passe vis children o que deseja renderizar dentro do botão
   */
  children: React.ReactNode;

  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

type ButtonProps = ButtonBaseProps & ButtonWrapperProps;

// Button.propTypes = {
//   disabled: PropTypes.bol,
//   children: PropTypes.node.isRequired,
// }


export default function Button({ type, disabled, children, color, onClick }: ButtonProps): JSX.Element {
  console.log(color);
  return (
    <ButtonWrapper type={type} disabled={disabled} color={color} onClick={onClick} >
      {children}
    </ButtonWrapper>
  );
}


Button.defaultProps = {
  color: 'primary.main',
}
