import {Reactions} from './Reactions'
import { UserInfo } from './Components/UserInfo'
import { Content } from './Components/Content'
import { Options } from './Components/Options'

export function Post() {
    return (
        <>
            <article className='principal-content'>
                <header className='header-post'>
                    <h1>Options</h1>
                    <Options/>
                    <h1>User info</h1>
                    <UserInfo/>
                </header>
                <section className='section-post'>
                    <h1>Content</h1>
                    <Content/>
                </section>
                <footer className='footer-post'>
                    <h1>Reactions</h1>
                    <Reactions/>
                </footer>
            </article>
        </>
    )
}