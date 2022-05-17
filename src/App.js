import { useState, useEffect } from 'react';
import {db} from './firebase';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import { addDoc, collection, deleteDoc, serverTimestamp, doc, query, orderBy, onSnapshot } from 'firebase/firestore';

const App = () => {
	const [notes, setNotes] = useState([]);
	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	// GET ALL NOTE
	useEffect(() => {
		const q = query(collection(db, "notes"), orderBy("createdAt", "desc"));
		onSnapshot(q, (snapshot) => {
			setNotes(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
		})
	}, []);

	// CREATE NOTE
	const addNote = (text) => {
		addDoc(collection(db, "notes"), {
			text: text,
			createdAt: serverTimestamp(),
		})
	};
	// DELETE NOTE
	const deleteNote = (id) => {
		const noteDoc = doc(db, "notes", id);
		deleteDoc(noteDoc);
	};


	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
					
				/>
			</div>
		</div>
	);
};

export default App;
