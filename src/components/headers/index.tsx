import { IMenuItem } from './MenuHeader';
import PrimaryHeader from './Primary';
import SecondaryHeader from './Secondary';

export interface IHeader {
  header?: 'primary' | 'secondary';
  hrefBackPage?: string;
}

export default function Header({ header = 'primary', hrefBackPage = '/' }: IHeader) {
  const hasUser = false; // verificar quando fizer a autenticação

  // const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  // const { user } = useContext(UserContext);
  // const token = localStorage.getItem('token');
  // const hasUser = token || user.email;

  // const { disconnectLogin } = useAuth();
  // const navigate = useNavigate();
  // const { setUser } = useContext(UserContext);

  // const closeSectionUser = async () => {
  //   const token = localStorage.getItem('token');
  //   await disconnectLogin(token || '');
  //   setUser({ email: '', password: '', remember: false });
  //   navigate('/');
  // };

  const menuItems: IMenuItem[] = [
    {
      name: 'Configurações',
      url: '#',
      id: 1,
    },
    {
      name: 'Metas',
      url: '#',
      id: 2,
    },
    {
      name: 'Notificações',
      url: '#',
      id: 3,
    },
    {
      name: 'Sair da conta',
      url: '#',
      id: 4,
    },
  ];

  return header === 'primary' ? (
    <PrimaryHeader menuItems={menuItems} hasUser={hasUser} />
  ) : (
    <SecondaryHeader menuItems={menuItems} hrefBackPage={hrefBackPage} hasUser={hasUser} />
  );
}
