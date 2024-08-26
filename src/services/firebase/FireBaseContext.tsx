import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { PropsWithChildren } from 'react'
import {
    AuthProvider,
    FirestoreProvider,
    StorageProvider,
    useFirebaseApp,
} from 'reactfire'

export function FirebaseServicesProvider({ children }: PropsWithChildren<{}>) {
    const app = useFirebaseApp()
    const firestore = getFirestore(app)
    const auth = getAuth(app)
    const storage = getStorage(app)

    return (
        <FirestoreProvider sdk={firestore}>
            <StorageProvider sdk={storage}>
                <AuthProvider sdk={auth}>{children}</AuthProvider>
            </StorageProvider>
        </FirestoreProvider>
    )
}
