import { auth } from "../services/firebase";

export function signup(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
}

export function signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    return auth().signInWithPopup(provider);
}

export function signInWithGitHub() {
    const provider = new auth.GithubAuthProvider();
    return auth().signInWithPopup(provider);
}

export function logOut() {
    alert('You have logged out of your account.')
    return auth().signOut();
    
}