import {CommentsPost} from './Components/Comment'
import { Liked } from './Components/Like'
import { Shared } from './Components/Share'
import { Stats } from './Components/Stats'
export function Reactions (){
    return(
        <>
            <CommentsPost/>
            <Liked/>
            <Shared/>
            <Stats/>
        </>
    )
}