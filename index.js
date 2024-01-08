import { app } from "./firebase.js";
import { getFirestore, doc, setDoc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

const db = getFirestore(app);
console.log(db)

const settingDoc = async()=>{
    await setDoc(doc(db, "cars", "1"),{
        brand: "Toyota",
        model: "Yaris",
        years: 2000,
        consuption: 1.5
    }).then(()=>{
        alert("Added successfully!")
    }).catch((error)=>{
        console.log(error)
    })
}

// settingDoc();

const addDocument = async()=>{
    await addDoc(collection(db, "cars"), {
        brand: "Mercedez",
        model: "Benz",
        years: 1995,
        consuption: 7
    }).then(()=>{
        alert("Added successfully!")
    }).catch((error)=>{
        console.log(error)
    })
}

// addDocument()

const getOne = async()=>{
   const docSnap = await getDoc(doc(db, "cars", "2IaxGgoLTi7dp4yYjMBk"))
   console.log("document data:", docSnap.data())
}
// getOne()

const getAll = async()=>{
    const querySnapshot = await getDocs(collection(db, "cars"))
    const arr =[]
    querySnapshot.forEach(el=> arr.push(el.data()))
    console.log(arr)
}
// getAll()

const update = async()=>{
    await updateDoc(doc(db, "cars", "pHr28jIOcvxE7ilSVcsA"),{
        brand: "Porsche",
        consuption: 12,
        model: "911",
        years: 2016
    }).then(()=>{
        alert("Added successfully!")
    }).catch((error)=>{
        console.log(error)
    })
}
// update()

const deleteField = async()=>{
    await deleteDoc(doc(db, "cars", "0n86wq6sVfasjkEiX3uf"))
}
// deleteField()