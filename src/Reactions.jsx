import {CommentsPost} from './Components/Comment'
import { Liked } from './Components/Like'
import { Shared } from './Components/Share'

export function Reactions (){
    return(
        <>
            <CommentsPost/>
            <Liked/>
            <Shared/>
            
        </>
    )
}