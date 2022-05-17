import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
    const noteDate = new Date((date && date.seconds * 1000))
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{noteDate.toLocaleTimeString() + " " + noteDate.toDateString()}</small>
				<DeleteForeverIcon
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};



export default Note;
