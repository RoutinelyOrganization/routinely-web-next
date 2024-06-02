import ButtonBackPage from '@/components/buttons/ButtonBackPage';
import type { IMenuItem } from '../MenuHeader';
import MenuHeader from '../MenuHeader';
import * as S from './styles';

export interface ISecondaryHeader {
  menuItems: IMenuItem[];
  hrefBackPage: string;
  hasUser?: boolean;
}

export default function SecondaryHeader({
  menuItems,
  hrefBackPage,
  hasUser = false,
}: ISecondaryHeader) {
  // const hasUser = false; // verificar quando fizer a autenticação

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

  //

  return (
    <S.SecondaryHeader>
      <div className="container-main">
        <ButtonBackPage href={hrefBackPage} />
        {hasUser && <MenuHeader menuItems={menuItems} />}
      </div>
    </S.SecondaryHeader>
  );
}
