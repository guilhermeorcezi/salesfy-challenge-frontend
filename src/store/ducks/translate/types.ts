export enum WordsTypes{
    ADD_NEW_NUMBER_REQUEST = '@words/ADD_NEW_NUMBER_REQUEST',
    ADD_NEW_NUMBER_SUCCESS = '@words/ADD_NEW_NUMBER_SUCCESS',
    ADD_NEW_NUMBER_FAIL = '@words/ADD_NEW_NUMBER_FAIL',
}

export interface Translate{
    translated:string
    number:string
}

export interface TranslateState{
    readonly data: Translate[]
}