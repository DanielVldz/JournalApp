import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./";

export const startNewNote = () => {
    return async( dispatch, getState ) => {
        
        dispatch ( savingNewNote() );
        
        const { uid } = getState().auth;

        const NewNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc ( collection( FirebaseDB,  `${ uid }/journal/notes`) );
        await setDoc( newDoc, NewNote );

        NewNote.id = newDoc.id;


        // dispatch
        dispatch ( addNewEmptyNote( NewNote ) );
        dispatch ( setActiveNote( NewNote) );
        
    }
}