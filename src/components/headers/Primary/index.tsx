import Logo from '@/components/logos/Logo';
import MenuHeader, { IMenuItem } from '../MenuHeader';
import * as S from './styles';

export interface IPrimaryHeader {
  menuItems: IMenuItem[];
  hasUser?: boolean;
}

export default function PrimaryHeader({ menuItems, hasUser = false }: IPrimaryHeader) {
  // const hasUser = false; verificar quando fizer a autenticação

  // const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  // const { user } = useContext(UserContext);
  // const token = localStorage.getItem('token');
  // const hasUser = token || user.email;

  // const { disconnectLogin } = useAuth();
  // const navigate = useNavigate();
  // const { setUser } = useContext(UserContext);

  return (
    <S.PrimaryHeader>
      <div className="container-main">
        <Logo />
        {hasUser && <MenuHeader menuItems={menuItems} />}
      </div>
    </S.PrimaryHeader>
  );
}
