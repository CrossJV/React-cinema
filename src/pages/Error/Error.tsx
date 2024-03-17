import Headler from "../../components/Headler/Headler";
import Paragraph from "../../components/Paragraph/Paragraph";
import Search from "../../components/Search/Search";
import styles from './Error.module.css';
import cn from 'classnames';

function Error() {
    return (
        <>
            <Search />
            <div className={cn(styles['error-message'])}>
                <Headler>Упс... Ничего не найдено</Headler>
                <Paragraph className={'error-paragraph'}>Попробуйте изменить запрос или ввести более точное название фильма</Paragraph>
            </div>
        </>
    );
}

export default Error;