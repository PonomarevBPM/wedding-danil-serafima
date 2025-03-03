import { createUseStyles } from 'react-jss';
import { Theme } from '../styles/theme';
import { AnimatedBaseLayout } from '../components/AnimatedBaseLayout';

const useStyles = createUseStyles((theme: Theme) => ({
    detailsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30
    },
    detailsHeading: {
        fontFamily: theme.font.rammillas,
        fontSize: 36,
        textTransform: 'uppercase',
        marginBottom: 30
    },
    detailsText: {
        fontFamily: theme.font.commons,
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    eight: {
        fontFamily: theme.font.rammillas,
        fontSize: 20,
        fontWeight: 300,
        textTransform: 'uppercase',
        border: '1px solid black',
        borderRadius: Number.MAX_SAFE_INTEGER,
        width: 36,
        height: 36,
        margin: '20px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        '&:after': {
            content: '"18+"',
            display: 'block',
            position: 'absolute',
            top: '12%',
            right: '2%'
        }
    }
}));

export function Details() {
    const classes = useStyles();

    return (
        <AnimatedBaseLayout>
            <div className={classes.detailsContainer}>
                <span className={classes.detailsHeading}>детали</span>
                <span className={classes.detailsText}>
                    Мы будем рады любому подарку,
                    <br />
                    но предпочтение отдадим конверту
                </span>
                <img
                    src={`${import.meta.env.BASE_URL}imgs/details/letter.JPG`}
                    style={{ width: 100 }}
                />
                <span className={classes.detailsText}>
                    Приятным комплиментом для нас
                    <br />
                    вместо цветов будет бутылка вашего
                    <br />
                    любимого вина, которую мы откроем
                    <br />
                    на ближайшем совместном празднике
                </span>
                <img
                    src={`${import.meta.env.BASE_URL}imgs/details/flower.jpg`}
                    style={{ width: 110, margin: '15px 0 15px' }}
                />
                <span className={classes.detailsText}>
                    Хотя мы любим ваших детей, это мероприятие
                    <br />
                    только для взрослых гостей.
                </span>
                {/* <img
                    src={`${import.meta.env.BASE_URL}imgs/details/age3.png`}
                    style={{ width: 90, margin: '20px 0 20px' }}
                /> */}
                <span className={classes.eight}></span>

                <span className={classes.detailsText}>
                    По всем вопросам Вы можете обращаться
                    <br />
                    к нашим свадебным организаторам:
                    <br />
                    <br />
                    Дарина +7 966 045-44-49
                    <br />
                    Валерия +7 909 660-79-72
                </span>
                <img
                    src={`${import.meta.env.BASE_URL}imgs/details/dart_logo.png`}
                    style={{ width: 150, marginTop: 20 }}
                />
            </div>
        </AnimatedBaseLayout>
    );
}
