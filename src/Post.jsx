import { Reactions } from './Reactions'
import { UserInfo } from './Components/UserInfo'
import { Content } from './Components/Content'
import { Options } from './Components/Options'
// import './App.css'

export function Post() {
    return (
        <>
            <article className='principal-content'>
                <div className='content'>
                <header className='header-post'>
                    <UserInfo userName="midudev">
                        Miguel Angel Duran
                    </UserInfo>
                    <Options />
                </header>
                <section className='section-post'>
                    <Content />
                </section>
                <footer className='footer-post'>
                    <Reactions />
                </footer>
                </div>
            </article>
        </>
    )
}