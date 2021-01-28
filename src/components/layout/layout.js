import s from './layout.module.css'

const Layout = ({colorBg, descr, id, title, urlBg}) => {
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
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc.full}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout