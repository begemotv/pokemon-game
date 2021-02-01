import s from './style.module.css'

const Layout = ({colorBg, children, id, title, titleColor, urlBg}) => {
    return (
        <section 
            className={s.root} 
            id={id} 
            style={{
                backgroundColor: colorBg ? `${colorBg}` : '',
                backgroundImage: urlBg ? `${urlBg}` : ''
        }}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title} >
                        <h3
                           style={{color: title === 'Cards' ? `white` : ''}} 
                        >{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc.full}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Layout;