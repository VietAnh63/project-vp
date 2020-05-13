import {combineReducers} from 'redux'
import DataAPI from './DataAPI'
import Like from './Like'
import Arrsttlike from './Arrsttlike'
import Arrview from './Arrview'
import Comment from './Comment'
import dataCmt from './dataCmt'
import countCmt from './CountCmt'
import PushComment from './PushComment'
var reducer = combineReducers({
     dataAPI : DataAPI,
     like: Like,
     sttlike: Arrsttlike,
     arrview: Arrview,
     comment: Comment,
     datacmt: dataCmt,
     count: countCmt,
     push: PushComment
})

export default reducer