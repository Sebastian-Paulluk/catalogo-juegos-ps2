import { initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWxrUih9XMj74zsJJYy-1FzcLH6CQZEIc",
  authDomain: "juegos-ps2.firebaseapp.com",
  projectId: "juegos-ps2",
  storageBucket: "juegos-ps2.appspot.com",
  messagingSenderId: "281113930639",
  appId: "1:281113930639:web:1a31faa423f47239bc39fa"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getGames = async()=> {
    const gamesCollectionRef = collection(db, "games");
    const snapshot = await getDocs(gamesCollectionRef);
    const docsData = snapshot.docs.map(doc => {
        return {id: doc.id, ...doc.data()}
    })
    return docsData;
}



export const getGamesByNameOrSubName = async(searchedText) =>{
  const productsCollectionRef = collection(db, "games");
  const snapshot = await getDocs(productsCollectionRef);

  const escapedText = searchedText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp('.*' + escapedText + '.*', 'i');

  const filteredProducts = snapshot.docs
      .map(doc => ({id: doc.id, ...doc.data() }))
      .filter(game => {
        const combinedGameAndSubName = `${game.name} ${game.sub_name}`;
        return regex.test(combinedGameAndSubName);
      })
    

  return filteredProducts;
}







export const deleteAllDocuments = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const snapshot = await getDocs(collectionRef);
  const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref));
  
  try {
    await Promise.all(deletePromises);
    console.log("Todos los documentos han sido eliminados.");
  } catch (error) {
    console.error("Error al eliminar documentos: ", error);
  }
};

export const exportMyData = async (data) => {
  const productsCollectionRef = collection(db, 'games');
  
  try {
    // Eliminar todos los documentos existentes
    await deleteAllDocuments('games');

    // Añadir los nuevos documentos
    const addPromises = data.map(prod => addDoc(productsCollectionRef, prod));
    const results = await Promise.all(addPromises);
    results.forEach((res, index) => console.log(`Documento creado ${index + 1}: ${res.id}`));
  } catch (error) {
    console.error("Error creando documentos: ", error);
  }
};