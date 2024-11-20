import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import ContainerHeaderFooterResponsive from '.';

describe('ContainerHeaderFooterResponsive Component', () => {
  it(' should render', () => {
    render(
      <ContainerHeaderFooterResponsive>
        <h1>jest test</h1>
      </ContainerHeaderFooterResponsive>,
    );

    const IconBackpage = screen.getByText('Voltar');
    expect(IconBackpage).toBeInTheDocument();

    const logo = screen.getByRole('img', { name: 'logo Routinely' });
    expect(logo).toBeInTheDocument();

    const iconMenu = screen.getByAltText('abrir menu');
    expect(iconMenu).toBeInTheDocument();

    const title = screen.getByRole('heading', { name: 'jest test' });
    expect(title).toBeInTheDocument();

    const buttonBack = screen.getByRole('button', { name: /Voltar/i });
    expect(buttonBack).toBeInTheDocument();

    const buttonExit = screen.getByRole('button', { name: /Sair/i });
    expect(buttonExit).toBeInTheDocument();
  });

  it('should render without session', () => {
    (useSession as jest.Mock).mockReturnValue({ data: null });

    render(
      <ContainerHeaderFooterResponsive>
        <h1>jest test</h1>
      </ContainerHeaderFooterResponsive>,
    );
    const iconNotification = screen.queryByAltText('notificações');
    expect(iconNotification).not.toBeInTheDocument();

    const iconMenu = screen.queryByAltText('abrir menu');
    expect(iconMenu).not.toBeInTheDocument();
  });
});
